import Vue from 'vue'
import App from './App.vue'

import '@/styles/index.scss'
import router from '@/router/index.js'

// 使用Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})