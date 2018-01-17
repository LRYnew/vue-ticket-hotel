<template>
  <div class="home">
    <topBar top-title="海南每日易购" show-back show-setting></topBar>
    <div class="container">
      <div class="top-ad">
        <swiperComponent></swiperComponent>
      </div>
      <div class="nav-box">
        <div class="nav hotel">
          <div class="nav-img"></div>
          <div class="nav-text">酒店预订</div>
        </div>
        <div class="nav ticket">
          <div class="nav-img"></div>
          <div class="nav-text">景点门票预订</div>
        </div>
      </div>
      <div class="concat">联系客服</div>
      <tooltip></tooltip>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import topBar from 'components/topBar/topBar';
  import swiperComponent from 'components/swiper/swiper';
  import tooltip from 'components/tooltip/tooltip';
  export default {
    data() {
      return {};
    },
    components: {
      topBar,
      swiperComponent,
      tooltip
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .home
    .container
      position fixed
      top 40px
      bottom 56px
      left 0
      right 0
      background-color #f0f0f0
      .top-ad
        width 100%
        height 77.74vw
      .nav-box
        display flex
        flex-direction row
        justify-content center
        position absolute
        top 73.6vw
        z-index 100
        width 100%
        .nav
          flex 0 0 42vw
          height 42vw
          display flex
          flex-direction column
          justify-content center
          align-items center
          background-color #fff
          border-radius 5px
          box-shadow 5px 5px 20px #cbcbcb
          margin 0 1.74vw
          .nav-img
            width 75px
            height 75px
            background-size 100% 100%
            background-repeat no-repeat
            background-position center center
          .nav-text
            color #979797
        .hotel
          .nav-img
            background-image url("./image/hotel.png")
        .ticket
          .nav-img
            background-image url("./image/ticket.png")
</style>
