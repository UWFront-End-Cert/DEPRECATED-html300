import Vue from 'vue'
import App from './index.vue'


// Vue-Router



//For VUE Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);





// Component for PageHeader


new Vue({
  el: '#app',
  render: h => h(App)
});
