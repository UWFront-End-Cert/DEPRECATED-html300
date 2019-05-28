import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*vue.component('app-header', Header);*/

Vue.component('blog-post', {
  props : ['title'],
  template : '<h1> {{ title }} </h1>'
})

/*Vue.component ('button-counter',{
  data : function(){
    return {type : Number , Count : 0}
  },
  template: '<button v-on:click = "count++">you have clicked {{count}} times.</button>'
})*/

new Vue({
  el: '#app',
  render: h => h(App)
})
