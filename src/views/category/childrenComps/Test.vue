<template>

</template>

<script>
  export default {
    name: "Test",
    props: {
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    watch: {
      data: {
        handler: function (oldVal, newVal) {
          console.log(1,this.data)
          setTimeout(this.refresh, 20)
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
