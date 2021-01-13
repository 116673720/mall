<template>
  <div id="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ""
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      show(message, duration = 2000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
 #toast {
   padding: 8px 10px;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: rgba(0, 0, 0, 0.65);
   color: white;
   z-index: 10;
 }
</style>

