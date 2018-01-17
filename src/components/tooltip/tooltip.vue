<template>
  <div class="tooltip" v-show="isShow">
    <div class="tooltip-box">
      <div class="tooltip-text">
        <div class="parent-text">{{parentText}}</div>
        <div class="child-text">{{childText}}</div>
      </div>
      <div class="btn-box">
        <div class="btn btn-cancel" @click.stop="hide">{{cancelText}}</div>
        <div class="btn btn-success" @click.stop="success">{{successText}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      successText: {
        type: String,
        default: '确定'
      },
      parentText: String,
      childText: String
    },
    data() {
      return {
        isShow: false
      };
    },
    methods: {
      show() {
        this.isShow = true;
      },
      hide() {
        this.isShow = false;
      },
      success() {
        this.$emit('success');
        this.hide();
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .tooltip
    display flex
    justify-content center
    align-items center
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 1000
    background-color rgba(0, 0, 0, 0.6)
    .tooltip-box
      width 72vw
      height 150px
      background-color #fff
      border-radius 8px
      .tooltip-text
        display flex
        flex-direction column
        justify-content center
        align-items center
        height 100px
        border-bottom 1px solid #9ea4b4
        .parent-text
          font-size 16px
          font-weight 600
          line-height 20px
          color #5b5b5b
          text-align center
        .child-text
          font-size 14px
          font-weight 600
          line-height 20px
          text-align center
          color #5b5b5b
      .btn-box
        display flex
        flex-direction row
        height 50px
        .btn
          flex 1
          display flex
          justify-content center
          align-items center
          height 100%
          font-size 16px
          color #4d7cc2
          letter-spacing 3px
        .btn-cancel
          border-right 1px solid #9ea4b4
</style>
