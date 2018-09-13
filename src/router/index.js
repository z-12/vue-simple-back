import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入组件
import Home from '@/components/index'
// 定义路由
const routes = [{
  path: '/',
  component: Home
}]
// 创建路由实例
const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router;
