<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    data() {
      return {
        bscroll: null,
        message: "哈哈哈"
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    mounted() {
      // 1.创建bscroll对象
      this.initBscroll()

      // 2.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.bscroll.on("pullingUp", () => {
          this.$emit("pullingUp")
        })
      }

      // 3.监听滚动的位置
      if(this.probeType !== 0) {
        this.bscroll.on("scroll", (position) => {
          this.$emit("scroll", position)
        })
      }

      window.scroll = this
    },
    methods: {
      initBscroll: function () {
        this.bscroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
        })
      },
      refresh: function () {
        this.bscroll.refresh()
      },
      finishPullUp: function () {
        this.bscroll.finishPullUp()
      },
      scrollTo: function (x, y, time = 300) {
        this.bscroll.scrollTo(x, y, time)
      },
      getScrollY: function () {
        return this.bscroll.y
      }
    },
    watch: {
      data: function () {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>

</style>
