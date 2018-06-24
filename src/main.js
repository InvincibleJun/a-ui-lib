// @flow

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Dialog from 'element-ui/packages/dialog'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

import './assets/icon/iconfont.css'

Vue.use(ElementUI)
Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
