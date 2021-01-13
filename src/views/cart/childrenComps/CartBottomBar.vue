<template>
  <div class="cart-bottom-bar">
    <div class="bar-check">
      <check-button :is-checked="isAllChecked" @click.native="changeAllChecked"/>
      <span>全选</span>
    </div>
    <div class="bar-total">
      合计: ¥{{totalPrice}}
    </div>
    <div class="bar-calculate" @click="calcClick">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  import {mapGetters} from "vuex"

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(["cartList"]),
      isAllChecked() {
        if (this.cartList.length === 0) return false
        return this.cartList.every(item => item.isChecked)
      },

      totalPrice() {
        return this.cartList.filter(item => item.isChecked)
          .reduce((total, item) => total + item.realPrice * item.count, 0)
          .toFixed(2)
      },

      checkedLength() {
        return this.cartList.filter(item => item.isChecked).length
      }
    },
    methods: {
      changeAllChecked() {
        if (this.cartList.every(item => item.isChecked)) {
          this.cartList.forEach(item => item.isChecked = false)
        } else {
          this.cartList.forEach(item => item.isChecked = true)
        }
      },
      calcClick() {
        this.$toast.show("请选择购买的商品")
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 44px;
    display: flex;
    background: #eee;
    color: #888;
    font-size: 14px;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  }

  .bar-check {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar-check span {
    margin-left: 5px;
  }

  .bar-total {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 5px;
    color: #666;
  }

  .bar-calculate {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: orangered;
    color: white;
  }
</style>
