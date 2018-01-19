<template>
  <div class="top-bar">
    <div class="btn-back" v-show="showBack">返回</div>
    <div class="top-title">{{topTitle}}</div>
    <div class="btn-setting" v-show="showBack">
      <i class="set-icon"></i><i class="set-icon"></i><i class="set-icon"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      topTitle: {
        type: String,
        default: '海南每日易购'
      },
      showBack: {
        type: Boolean,
        default: true
      },
      showSetting: {
        type: Boolean,
        default: true
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .top-bar
    display flex
    flex-direction row
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 40px
    color #fff
    background-color #1c1b20
    .btn-back
      width 14vw
      text-align right
      font-size 14px
      line-height 40px
      &:before
        content ''
        display inline-block
        margin-right 5px
        vertical-align middle
        width 14px
        height 14px
        background-image url('./image/back.png')
        background-repeat no-repeat
        background-size 100% 100%
        background-position center center
    .top-title
      flex 1
      font-size 18px
      line-height 40px
      text-align center
    .btn-setting
      width 14vw
      text-align center
      line-height 40px
      cursor pointer
      .set-icon
        display inline-block
        width 5px
        height 5px
        background-color #fff
        border-radius 50%
      .set-icon + .set-icon
        margin-left 3px
</style>
