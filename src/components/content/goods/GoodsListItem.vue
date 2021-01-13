<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="itemImageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      itemImageLoad() {
        // console.log("emit")
        this.$bus.$emit("itemImageLoad")
      },
      itemClick() {
        this.$router.push("/detail/" + this.goodsItem.iid)
      }
    },
    computed: {
      showImg() {
        if (this.goodsItem.show) {
          return this.goodsItem.show.img
        } else if (this.goodsItem.image) {
          return this.goodsItem.image
        } else if (this.goodsItem.img) {
          return this.goodsItem.img
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 47%;
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
  }

  .goods-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background-image: url("~assets/img/common/collect.svg");
    background-size: 100% 100%;
  }
</style>
