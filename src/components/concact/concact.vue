<template>
  <div class="concact" @click.stop="showTip">
    联系客服
    <tooltip ref="tooltip" :parent-text="parentText" :child-text="childText" :successText="successText"
             @success="callPhone"></tooltip>
  </div>
</template>

<script type="text/ecmascript-6">
  import tooltip from 'components/tooltip/tooltip';
  export default{
    data() {
      return {
        parentText: '拨打电话',
        childText: '18876330709',
        successText: '拨打'
      };
    },
    methods: {
      showTip() {
        this.$refs.tooltip.show();
      },
      callPhone() {
        console.log('拨打' + this.childText);
        window.location.href = 'tel:' + this.childText;
      }
    },
    components: {
      tooltip
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .concact
    position fixed
    bottom: 56px
    left 0
    z-index 100
    width 100%
    height 40px
    line-height 40px
    text-align center
    color #ed9ea0
    font-size 14px
</style>
