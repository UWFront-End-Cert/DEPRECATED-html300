import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'

Vue.component('app-header', Header);

// to initialize router in terminal type the below:
// npm install --save vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('page-header', {
  template: '<p>Test</p>'
})


Vue.component('blog-post', {
  //camelCase for JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

Vue.component('button-counter', {
  data: function() {
    return {type: Number, count: 0}
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times</button>'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
