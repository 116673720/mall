<template>
  <div v-if="Object.keys(detailInfo).length" id="goods-info">
    <div class="info-desc">
      <div class="start"/>
      <div class="desc">
        {{detailInfo.desc}}
      </div>
      <div class="end"/>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    data: function () {
      return {
        counter: 0
      }
    },
    props: {
      detailInfo: {
        type: Object
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
  #goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  #goods-info .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start:before, .info-desc .end:after {
    content: "";
    width: 5px;
    height: 5px;
    background: black;
    position: absolute;
    bottom: 0;
  }

  .info-desc .end:after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  #goods-info .info-key {
    color: black;
    font-size: 15px;
    margin: 10px 0 10px 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
