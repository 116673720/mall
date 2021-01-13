<template>
  <div class="grid-view">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "GridView",
    props: {
      columns: {
        type: Number,
        default: 2
      },
      vPadding: {
        type: Number,
        default: 8
      },
      hPadding: {
        type: Number,
        default: 8
      },
      itemVMargin: {
        type: Number,
        default: 8
      },
      itemHMargin: {
        type: Number,
        default: 8
      }
    },
    mounted() {
      setTimeout(() => {
        this.autoLayout()
      }, 20)
    },
    updated() {
      this.autoLayout()
    },
    methods: {
      autoLayout() {
        var el = this.$el
        var children = el.children
        el.style.padding = `${this.vPadding}px ${this.hPadding}px`
        var itemWidth = (el.clientWidth - 2 * this.hPadding - (this.columns - 1) * this.itemHMargin) / this.columns

        for (var i = 0; i < children.length; i++) {
          var item = children[i]
          item.style.width = itemWidth + "px"
          if ((i + 1) % this.columns !== 0) {
            item.style.marginRight = this.itemHMargin + "px"
          }
          if ((i + 1) > this.columns) {
            item.style.marginTop = this.itemVMargin + "px"
          }
        }
      }
    }
  }
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>
