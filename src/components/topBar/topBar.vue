<template>
  <div class="top-bar">
    <div class="btn-back">返回</div>
    <div class="top-title">{{topTitle}}</div>
    <div class="btn-setting">
      <i class="set-icon"></i><i class="set-icon"></i><i class="set-icon"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .top-bar
    display flex
    flex-direction row
    position fixed
    top 0
    left 0
    width 100%
    height 40px
    background-color #000000

</style>
