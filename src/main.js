import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from "components/common/toast"

Vue.use(toast)
Vue.use(VueLazyLoad, {
  // 占位图
  loading: require('./assets/img/holder/placeholder.jpg')
})

FastClick.attach(document.body)

Vue.config.productionTip = false;

// 创建事件总线实例
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
