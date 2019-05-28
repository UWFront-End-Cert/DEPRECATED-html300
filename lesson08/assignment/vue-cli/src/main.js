import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Images from './images.vue'

Vue.component('app-header', Header)

Vue.component('app-images', Images)

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
