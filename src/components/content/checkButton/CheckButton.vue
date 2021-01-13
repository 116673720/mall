<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img src="~@/assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #ccc;
    width: 18px;
    height: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checked {
    background: #ff8198;
    border: 2px solid #ff8198;
  }

  img {
    width: 90%;
  }

</style>
