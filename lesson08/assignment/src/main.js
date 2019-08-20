import Vue from 'vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import App from './App.vue'
import './main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app') 
