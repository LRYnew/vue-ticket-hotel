import Vue from 'vue';
import Router from 'vue-router';
import login from 'components/login/login';
import home from 'components/home/home';
import order from 'components/order/order';
import user from 'components/user/user';

// 使用router
Vue.use(Router);

// 定义路由路径
const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/user',
    component: user
  }
];

// 创建新的router对象
const router = new Router({
  routes,
  linkActiveClass: 'active'
});

// 输出
export default router;
