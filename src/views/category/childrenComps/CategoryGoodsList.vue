<template>
  <grid-view v-if="goodsList.length">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods-item="item"/>
  </grid-view>
</template>

<script>
  import GridView from "@/components/common/gridView/GridView";
  import GoodsListItem from "@/components/content/goods/GoodsListItem";

  export default {
    name: "CategoryGoodsList",
    props: {
      goodsList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
      GridView
    }
  }
</script>

<style scoped>

</style>
