<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :isChecked="itemInfo.isChecked" v-on:click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="info-title">{{itemInfo.title}}</div>
      <div class="info-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price left">¥{{itemInfo.realPrice}}</div>
        <div class="bottom-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.itemInfo.isChecked = !this.itemInfo.isChecked
      }
    },
    mounted() {
      console.log(this.itemInfo)
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .cart-list-item .item-selector {
    width: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-list-item .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }

  .cart-list-item .item-info {
    color: #333;
    font-size: 17px;
    padding: 5px 10px;
    overflow: hidden;
    position: relative;
  }

  .item-info .info-title, .item-info .info-desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item-info .info-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .item-info .info-bottom {
    position: absolute;
    margin-top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }

  .info-bottom .bottom-price {
    color: orangered;
  }
</style>
