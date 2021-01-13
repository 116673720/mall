<template>
  <div class="list-view">
    <div class="item" v-for="item in listData">
      <svg class="icon" width="18px" height="18px">
        <use :xlink:href="item.icon" :fill="item.iconColor"/>
      </svg>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListView",
    props: {
      listData: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .list-view {
    background: #fff;
    font-size: 15px;
    color: #333;
  }

  .item {
    display: flex;
    padding-left: 16px;
    align-items: center;
    height: 44px;
    line-height: 44px;

  }

  .icon {
    position: relative;
    top: -1px;
  }

  .info {
    flex: 1;
    margin-left: 6px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
