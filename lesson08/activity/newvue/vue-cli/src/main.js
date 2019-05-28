import Vue from 'vue'
import App from './App.vue'



Vue.component('app-header', {
props : ['heading'],
template :'<h1> {{heading}}</h1>'

})

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter ({
  routes,
  mode:'history'
})

Vue.component('blog-post', {
  props : ['title'],
  template : '<h1> {{ title }} </h1>'
})

Vue.component ('button-counter',{
  data : function(){
    return {type : Number , Count : 0}
  },
  template: `<button v-on:click = "Count++">you have clicked {{Count}} times.</button>`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
