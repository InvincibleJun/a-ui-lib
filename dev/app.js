import Vue from 'vue';
import App from './App.vue';
import Ui from '../src/index';

Vue.use(Ui);


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
