<template>
  <div class="login">
    <topbar top-title="会员登录" :show-back="showBack" :show-setting="showSetting"></topbar>
    <div class="container">

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

</style>
