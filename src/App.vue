<template>
  <div id="app">
    <!--页面内容-->
    <router-view></router-view>
    <!--底部导航-->
    <div class="tab-bar">
      <router-link to="/home" class="tab-item home">
        <div class="tab-icon"></div>
        <div class="tab-text">首页</div>
      </router-link>
      <router-link to="/order" class="tab-item order">
        <div class="tab-icon"></div>
        <div class="tab-text">订单</div>
      </router-link>
      <router-link to="/user" class="tab-item user">
        <div class="tab-icon"></div>
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
          margin-top 9px
          font-size 12px
          color #7f7f7f
</style>
