<template>
  <swiper class="detail-swiper" ref="mySwiper" :options="swiperOptions" v-if="topImages.length">
    <swiper-slide v-for="item in topImages">
      <img :src="item" @load="imgLoad" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  import Swiper2, { Navigation, Pagination, Autoplay } from "swiper"
  Swiper2.use([Navigation, Pagination, Autoplay])

  export default {
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          loop: true,
        }
      }
    },
    props: {
      topImages: {
        type: Array
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    methods: {
      imgLoad() {
        this.$emit("imgLoad")
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }

  .detail-swiper img {
    width: 100%;
  }
</style>
