<template>
  <div class="login">
    <topbar top-title="会员登录" :show-back="showBack" :show-setting="showSetting"></topbar>
    <div class="container">
      <div class="welcome">welcome</div>
      <div class="wrap-login">
        <div class="box-input">
          <label class="label">手机号:</label>
          <input type="number" class="input" maxlength="11" placeholder="注册或者绑定手机号">
        </div>
        <div class="box-input">
          <label class="label">动态码:</label>
          <input type="text" class="input" placeholder="短信动态码">
        </div>
        <div class="box-note">
          <span class="btn-note">获取动态码</span>
        </div>
        <div class="box-login">
          登录
        </div>
        <div class="box-bottom">
          <div class="btn-register">注册新账号</div>
          <div class="btn-wx"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import topbar from 'components/topbar/topbar';
  export default {
    data() {
      return {
        showBack: false,
        showSetting: false
      };
    },
    components: {
      topbar
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .login
    .container
      display flex
      flex-direction column
      justify-content center
      align-items center
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      z-index 99
      /*padding 40px 0px 0px 0px*/
      background-image url("./image/bg.png")
      background-repeat no-repeat
      background-size 100% 100%
      &::input-placeholder
        color #fff
      .welcome
        margin-bottom 8.02vh
        font-size 36px
        line-height 36px
        color #fff
        text-align center
      .wrap-login
        display flex
        flex-direction column
        width 76.3vw
        .box-input
          flex 0 0 39px
          display flex
          flex-direction row
          margin-bottom 1.87vh
          padding 0px 2.67vw
          width 100%
          height 39px
          border 2px solid #fff
          border-radius 30px
          color #fff
          .label
            flex 0 0 54px
            margin-right 8px
            font-size 16px
            font-weight 600
            line-height 36px
          .input
            flex 1
            padding 0px
            height 100%
            border none
            font-size 16px
            color #fff
            background-color transparent
        .box-note
          flex 0 0 16px
          margin-bottom 18vh
          padding-right 15px
          width 100%
          height 16px
          text-align right
          .btn-note
            font-size 12px
            color #f1f1f1
            letter-spacing 2px
        .box-login
          flex 0 0 36px
          width 100%
          font-size 16px
          font-weight 600
          color #fff
          line-height 36px
          text-align center
          border 2px solid #fff
          border-radius 30px
          background-color rgba(255,255,255,0.4)
        .box-bottom
          flex 0 0 40px
          display flex
          justify-content flex-end
          align-items center
          width 100%
          .btn-register
            margin-right 10px
            padding-right 10px
            height 20px
            font-size 14px
            color #fff
            letter-spacing 1px
            border-right 1px solid #fff
          .btn-wx
            width 40px
            height 40px
            background-image url("./image/wx.png")
            background-size 100% 100%
            background-repeat no-repeat
  #app
    .tab-bar
      display none
</style>
