import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
//import VueFlip from 'vue-flip';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Flipper, Flipped } from "vue-flip-toolkit";


library.add(faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('vue-flipper', Flipper);
Vue.component('vue-flipped', Flipped);


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
