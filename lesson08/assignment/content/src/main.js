import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
Vue.use(BootstrapVue)
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
