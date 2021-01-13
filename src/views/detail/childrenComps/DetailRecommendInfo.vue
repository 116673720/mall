<template>
  <div v-if="recommend.length" class="recommend-info">
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "DetailRecommendInfo",
  components: {
    GoodsList
  },
  props: {
    recommend: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
