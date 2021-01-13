<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="category-content">
      <category-menu class="category-menu"
                     :menuList="menuList"
                     @itemClick="getSubMenuList"/>

      <scroll class="scroll" ref="scroll" :data="[menuDetail]">
        <category-sub-menu :subMenuList="showSubMenuList" @imgLoad="imgLoad"/>
        <tab-control :titles="['综合', '新品', '销量']"
                     ref="tabControl"
                     @tabClick="tabClick"/>
        <category-goods-list :goodsList="showGoodsList"/>
      </scroll>
    </div>
  </div>
</template>

<script>
  import CategoryMenu from "./childrenComps/CategoryMenu";
  import CategorySubMenu from "./childrenComps/CategorySubMenu";
  import CategoryGoodsList from "./childrenComps/CategoryGoodsList";

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";
  import TabControl from "@/components/content/tabControl/TabControl";

  import {getMenu, getSubMenu, getGoodsList} from "@/network/category"

  import {imageLoadMixin} from "@/common/mixin";
  import {debounce} from "@/common/utils";
  import GoodsList from "@/components/content/goods/GoodsList";

  export default {
    name: "Category",
    mixins: [imageLoadMixin],
    components: {
      GoodsList,
      CategoryMenu,
      CategorySubMenu,
      CategoryGoodsList,
      NavBar,
      Scroll,
      TabControl,
    },
    data: function () {
      return {
        menuList: [],
        menuDetail: [],
        currentIndex: -1,
        currentType: "pop",
        saveY: 0
      }
    },
    activated() {
      // console.log("activated")
      this.$refs.scroll.scrollTo(0, this.saveY, 3000)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off("itemImageLoad", this.itemImageLoad)
    },
    created() {
      this.getMenuList()
    },
    mounted() {
      window.scroll = this.$refs.scroll
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      imgLoad() {
        this.refresh()
      },
      tabClick(index) {
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
      },
      /**
       * 网络请求相关的方法
       */
      getMenuList() {
        getMenu().then((res) => {
          this.menuList = res.data.category.list
          for (var i = 0; i < this.menuList.length; i++) {
            this.menuDetail[i] = {
              subMenuList: [],
              goodsList: {
                pop: [],
                new: [],
                sell: []
              }
            }
          }
          this.getSubMenuList(0)
        })
      },
      getSubMenuList(index) {
        this.currentIndex = index
        var maitKey = this.menuList[this.currentIndex].maitKey
        getSubMenu(maitKey).then(res => {
          this.menuDetail[this.currentIndex].subMenuList = res.data.list
          this.menuDetail = [...this.menuDetail]
          this.getGoodsList("pop")
          this.getGoodsList("new")
          this.getGoodsList("sell")
        })

      },
      getGoodsList(type) {
        var miniWallkey = this.menuList[this.currentIndex].miniWallkey
        getGoodsList(miniWallkey, type).then(res => {
          this.menuDetail[this.currentIndex].goodsList[type] = res
          this.menuDetail = [...this.menuDetail]
        })
      }
    },
    computed: {
      showSubMenuList() {
        if (this.currentIndex === -1) return []
        return this.menuDetail[this.currentIndex].subMenuList
      },
      showGoodsList() {
        if (this.currentIndex === -1) return []
        return this.menuDetail[this.currentIndex].goodsList[this.currentType]
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh
  }

  .nav-bar {
    background: var(--color-tint);
    color: white;
    font-weight: bold;
  }

  .category-content {
    display: flex;
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .scroll {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
</style>
