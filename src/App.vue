<template>
  <div id="app">
    <!--页面内容-->
    <transition name="switch" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--底部导航-->
    <div class="tab-bar">
      <router-link to="/home" class="tab-item">
        <div class="tab-icon home"></div>
        <div class="tab-text">首页</div>
      </router-link>
      <router-link to="/order" class="tab-item">
        <div class="tab-icon order"></div>
        <div class="tab-text">订单</div>
      </router-link>
      <router-link to="/user" class="tab-item">
        <div class="tab-icon user"></div>
        <div class="tab-text">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app'
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  #app
    .tab-bar
      display flex
      flex-direction row
      position fixed
      left 0
      bottom 0
      z-index 100
      width 100%
      height 56px
      background-color #fff
      box-shadow 0px -3px 3px #e5e5e5
      .tab-item
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        .tab-text
          /*margin-top 9px*/
          font-size 12px
          color #7f7f7f
        .tab-icon
          width 25px
          height 25px
          background-repeat no-repeat
          background-size 100% 100%
          background-position center center
        .home
          background-image url('./assets/images/icon/home.png')
        .order
          background-image url('./assets/images/icon/order.png')
        .user
          background-image url('./assets/images/icon/user.png')
      .tab-active
        .home
          background-image url('./assets/images/icon/home_active.png')
        .order
          background-image url('./assets/images/icon/order_active.png')
        .user
          background-image url('./assets/images/icon/user_active.png')
        .tab-text
          color #89cae6
  .switch-enter-active, .switch-leave-active
    transition all 0.2s linear
  .switch-enter, .switch-leave-active
    transform: translate3d(100%, 0, 0)
</style>
