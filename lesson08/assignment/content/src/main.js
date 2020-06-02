
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



//import itinerary from '@/components/itinerary.vue'



Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})

Vue.config.productionTip = false

new Vue({
  router,// itinerary,
  render: h => h(App)
}).$mount('#app')


//https://forum.vuejs.org/t/append-component-vue-to-document-body/5783

//import Comp from '@/components/itinerary.vue'
//new Vue({
//  el: '#modal-container',
//  render: h => h(Comp)
//}).$mount('#bod')
