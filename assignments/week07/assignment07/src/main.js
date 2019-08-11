import Vue from 'vue'
import App from './App.vue'

import router from './router';

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
