import Vue from 'vue'
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from '@/App.vue'

import router from "./router/index.js"
import {store} from "@/store/index.js"
import toast from "@/components/common/toast/index.js"

import 'swiper/swiper-bundle.css'

FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  error: require('./assets/img/common/error.jpg'),
  loading: require('./assets/img/common/placeholder.png'),
})

Vue.use(toast)

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.prototype.$bus = new Vue()



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


