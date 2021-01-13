<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 20px;
    font-size: 10px;
    border-bottom: 10px solid #eee;
  }
  .recommend .recommend-item {
    flex: 1;
  }
  .recommend img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>
