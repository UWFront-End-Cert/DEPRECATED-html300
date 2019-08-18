import Vue from 'vue'
import App from './App.vue'
  //A1- import the router 2-tell vue to use it 3-
import VueRouter from 'vue-router'
  //B1 - after install vue-bootstrap then  register BootstrapVue plugin in your app entry point:
import BootstrapVue from 'bootstrap-vue'
 //B2- import Bootstrap and BootstrapVue css files:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

   //A2-use the router
Vue.use(VueRouter)
  //import the routes.vue then declare it in vue instance
import routes from './router'

    //A3-start vue instance
const router = new VueRouter({
   //declare routes in new rounter instance
   routes : routes,
   mode:'history'  //remove the hash from the url
})

Vue.filter('toLower', function(v){
  return v.toLowerCase();
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
