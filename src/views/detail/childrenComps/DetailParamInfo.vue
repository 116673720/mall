<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length">
    <table class="info-sizes" v-for="(table, tableIndex) in paramInfo.sizes">
      <tr v-for="(tr, trIndex) in table">
        <td v-for="(td, tdIndex) in tr">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    border-bottom: 1px solid rgba(100,100,100,.1);
    height: 42px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .info-param .info-param-key {
    width: 95px;
  }

  .info-param .info-param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>
