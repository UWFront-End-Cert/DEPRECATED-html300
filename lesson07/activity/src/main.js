// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/popper.js/dist/popper.min.js'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
$(".btn-outline-primary").one('click',function(){
  $(".d-inline-block").remove()	;
  $( ".btn-group" ).append( '<button data-v-1b5a9218="" type="submit" class="btn btn-primary">Submit</button>');
});

	});			
