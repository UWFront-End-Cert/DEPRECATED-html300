import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapVue from 'bootstrap-vue'
import './main.scss'
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem } from 'mdbvue';
import { mdbContainer,mdbAccordion } from 'mdbvue';
Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
        el:'#app',
        router,
        render:h => h(App)
});
new Vue({
  el: '#example',
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  }
})
