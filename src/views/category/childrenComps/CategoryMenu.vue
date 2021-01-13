<template>
  <div class="category-menu" v-if="menuList.length">
    <scroll class="menu-scroll">
      <div class="menu-item"
           :class="{active: index === currentIndex}"
           v-for="(item, index) in menuList"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "CategoryMenu",
    components: {
      Scroll
    },
    data: function () {
      return {
        currentIndex: 0
      }
    },
    props: {
      menuList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("itemClick", index)
      }
    }
  }
</script>

<style scoped>
  .category-menu {
    width: 100px;
    height: 100%;
    background: #f6f6f6;
    text-align: center;
    font-size: 14px;
  }

  .menu-scroll {
    height: 100%;
    overflow: hidden;
  }

  .menu-item {
    height: 45px;
    line-height: 45px;
  }

  .active {
    color: var(--color-high-text);
    font-weight: bold;
    border-left: 3px solid var(--color-high-text);
    background: white;
  }
</style>
