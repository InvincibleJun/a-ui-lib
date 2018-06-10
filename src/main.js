// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './APP'
import router from './router'

import Dialog from 'element-ui/packages/dialog'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})