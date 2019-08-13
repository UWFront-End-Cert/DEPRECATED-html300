import Vue from 'vue'

import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


