<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control"
                 :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isTabFixed"/>
    <scroll class="home-wrapper"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childrenComps/HomeSwiper";
  import RecommendView from "./childrenComps/RecommendView";
  import FeatureView from "./childrenComps/FeatureView";

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  import {getHomeMultiData, getHomeGoods} from "@/network/home";
  import {imageLoadMixin, backTopMixin} from "@/common/mixin";

  export default {
    name: "Home",
    components: {
      TabControl,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll
    },
    mixins: [imageLoadMixin, backTopMixin],  //首页加载时不能向下滚动
    data: function () {
      return {
        banners: [],
        recommend: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: "pop",
        isTabFixed: false,
        tabOffsetTop: 0,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultiData()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    mounted() {
      window.scroll = this.$refs.scroll
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 3000)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off("itemImageLoad", this.itemImageLoad)
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick: function (index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      swiperImageLoad: function () {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        this.$refs.scroll.refresh()
      },
      loadMore: function () {
        this.getHomeGoods(this.currentType)
      },
      contentScroll: function (position) {
        this.listenShowBackTop(position)
        this.isTabFixed = -position.y > this.tabOffsetTop
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultiData: function () {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods: function (type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed: {
      showGoods: function () {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .home-wrapper {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
