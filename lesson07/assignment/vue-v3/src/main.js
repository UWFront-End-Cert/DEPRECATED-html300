import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
