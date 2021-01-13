<template>
  <grid-view :columns="3" :item-v-margin="15" :v-padding="20" v-if="subMenuList.length">
    <div class="content-item" v-for="(item, index) in subMenuList" :key="index">
      <a :href="item.link">
        <img class="item-img"
             :src="item.image"
             @load="imgLoad">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
  import GridView from "@/components/common/gridView/GridView";

  export default {
    name: "CategorySubMenu",
    components: {GridView},
    data: function () {
      return {
        test: false
      }
    },
    props: {
      subMenuList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit("imgLoad")
      }
    }
  }
</script>

<style scoped>
  .content-item {
    font-size: 12px;
    text-align: center;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>
