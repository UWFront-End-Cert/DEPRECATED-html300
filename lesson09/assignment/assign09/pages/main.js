import Vue from 'vue'
import App from './index.vue'


// Vue-Router
import VueRouter from 'vue-router';


//For VUE Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import {routes} from './routes';
const router = new VueRouter ({
    routes,
    mode : 'history'
})


// Component for PageHeader


new Vue({
  el: '#app',

  router,
  render: h => h(App)
});
