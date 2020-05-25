import Vue from 'vue'
import App from './App'
import Router from '/router'

import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(BootstrapVue)
new Vue({
  el: '#app',
        el:'#app',
        render:h => h(App)
});
