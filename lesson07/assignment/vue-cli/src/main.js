import Vue from 'vue'
import App from './App.vue'

import App_grid from './App_grid.vue'
import App_images from './App_images.vue'
import App_accordian from './App_accordian.vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  }).$mount('#app')

new Vue({
  el: '#app_grid',
  render: h => h(App_grid),
  }).$mount('#app_grid')

new Vue({
  el: '#app_images',
  render: h => h(App_images),
  }).$mount('#app_images')

new Vue({
  el: '#app_accordian',
   render: h => h(App_accordian),
  }).$mount('#app_accordian')                 