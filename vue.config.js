module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        "vue$": "vue/dist/vue.esm.js",
        "assets":"@/assets",
        "components":"@/components",
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
