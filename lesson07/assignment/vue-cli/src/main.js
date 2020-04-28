import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
import EvaIcons from 'vue-eva-icons'

Vue.use(EvaIcons)




new Vue({
    router,
        render: h => h(App),
      }).$mount('#app')
