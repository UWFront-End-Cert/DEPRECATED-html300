import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Images from '@/components/Images'
import Accordion from '@/components/Accordion'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
    {
      path: '/accordion',
      name: 'Accordion',
      component: Accordion
    }
  ]
})
