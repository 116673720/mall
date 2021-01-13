<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail-nav"  @titleClick="navBarClick"/>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <new-detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info ref="goods" :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info ref="param" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend="recommend"/>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childrenComps/DetailNavBar";
  import NewDetailSwiper from "./childrenComps/DetailSwiper";
  import DetailBaseInfo from "./childrenComps/DetailBaseInfo";
  import DetailShopInfo from "./childrenComps/DetailShopInfo";
  import DetailGoodsInfo from "./childrenComps/DetailGoodsInfo";
  import DetailParamInfo from "./childrenComps/DetailParamInfo";
  import DetailCommentInfo from "./childrenComps/DetailCommentInfo";
  import DetailRecommendInfo from "./childrenComps/DetailRecommendInfo";
  import DetailBottomBar from "./childrenComps/DetailBottomBar";

  import Scroll from "@/components/common/scroll/Scroll";

  import {getDetail, Goods, Shop, GoodsParam, Comment, getRecommend} from "@/network/detail";
  import {imageLoadMixin, backTopMixin} from "@/common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      NewDetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      Scroll,
    },
    mixins: [imageLoadMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        topY: [],
        getTopY: null,
        currentIndex: 0,
        message: "",
        isShow: false
      }
    },
    created() {
      // 1.保存传入的id
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then((res) => {
        var data = res.result

        // 2.1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 2.2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 2.3.获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 2.4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 2.5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 2.6.获取用户评价的数据
        this.commentInfo = new Comment(data.rate.list[0])
      })

      // 3.获取推荐商品的数据
      getRecommend().then((res) => {
        this.recommend = res.data.list
      })

      // 4.给getTopY赋值
      this.getTopY = () => {
        this.topY = []
        this.topY.push(0)
        this.topY.push(this.$refs.param.$el.offsetTop)
        this.topY.push(this.$refs.comment.$el.offsetTop)
        this.topY.push(this.$refs.recommend.$el.offsetTop)
        this.topY.push(Number.MAX_VALUE)
      }
    },
    destroyed() {
      this.$bus.$off("itemImageLoad", this.itemImageLoad)
    },
    methods: {
      imgLoad() {
        this.refresh ? this.refresh() : this.$refs.scroll.refresh()
        this.getTopY()
      },
      navBarClick(index) {
        this.$refs.scroll.scrollTo(0, -this.topY[index])
      },
      contentScroll(position) {
        var positionY = -position.y
        var length = this.topY.length
        for (var i = 0; i < length - 1; i++) {
          if (i !== this.currentIndex && positionY >= this.topY[i] && positionY < this.topY[i + 1]) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        this.listenShowBackTop(position)
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        var product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.detailInfo.desc
        product.realPrice = this.goods.realPrice
        product.iid = this.iid

        // 2.将商品添加到购物车里
        this.$store.dispatch("addToCart", product)
          .then((res) => {
            this.$toast.show(res, 2000)
          })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: white;
    height: 100vh;
  }

  .detail-nav {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    background: white;
  }

  .detail-scroll {
    height: calc(100% - 44px - 58px);
    position: relative;
    top: 44px;
    overflow: hidden;
  }
</style>
