// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import Vuex from 'vuex';
import 'babel-polyfill';

Vue.use(Vuex);

Vue.config.productionTip = false;

// 定义通用状态Vuex
const store = new Vuex.Store({
  state: {
    // 状态值变量
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
