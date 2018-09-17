import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routerConfig from '@/router/router-config.js'

const router = new VueRouter({
  // mode: 'history',
  routes: routerConfig
})

export default router;
