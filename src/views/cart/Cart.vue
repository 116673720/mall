<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartList from "./childrenComps/CartList";
  import CartBottomBar from "./childrenComps/CartBottomBar";

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import {mapGetters} from "vuex"

  export default {
    name: "Cart",
    components: {
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters([
        "cartLength"
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--color-tint);
    color: white;
    font-weight: bold;
  }

  .cart-scroll {
    height: calc(100vh - 44px - 49px - 44px);
    overflow: hidden;
  }
</style>
