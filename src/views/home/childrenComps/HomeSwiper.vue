<template>
  <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions" v-if="banners.length">
    <swiper-slide v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
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
          loop: true
        }
      }
    },
    props: {
      banners: {
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
      swiperImageLoad() {
        if (!this.isFinished) {
          this.isFinished = true
          this.$emit("swiperImageLoad")
        }
      }
    }
  }
</script>

<style scoped>
  .home-swiper a {
    display: block;
  }

  .home-swiper img {
    display: block;
    width: 100%;
  }
</style>
