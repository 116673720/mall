import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

export var imageLoadMixin = {
  data() {
    return {
      itemImageLoad: null,
      refresh: null,
      getTopY: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    if (!this.itemImageLoad) {
      this.itemImageLoad = () => {
        this.refresh()
      }
    }
    this.$bus.$on("itemImageLoad", this.itemImageLoad)
  },
  activated() {
    if (!this.refresh) {
      this.refresh = debounce(this.$refs.scroll.refresh, 100)
    }
    if (!this.itemImageLoad) {
      this.itemImageLoad = () => {
        this.refresh()
      }
    } else {
      return
    }
    this.$bus.$on("itemImageLoad", this.itemImageLoad)
  }
}
export var backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick: function () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop: function (position) {
      this.isShowBackTop = -(position.y) > 1000
    }
  }
}
