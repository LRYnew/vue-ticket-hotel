<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item" v-for="item in images" :key="item">
        <img :src="item" class="item-img">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default{
    props: {
      images: {
        type: Array,
        default() {
          return [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
          ];
        }
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true
        }
      };
    },
    components: {
      swiper,
      swiperSlide
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .swiper
    width 100%
    height 100%
    .swiper-box
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-item
          width 100%
          height: 100%
          .item-img
            width: 100%
            height: 100%
</style>
