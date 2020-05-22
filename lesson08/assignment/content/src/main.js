
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
//import { library } from '@fortawesome/fontawesome-svg-core';
//import {faHeart} from '@fortawesome/free-solid-svg-icons';
//mport { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//library.add(faHeart);
//Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue)
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

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
