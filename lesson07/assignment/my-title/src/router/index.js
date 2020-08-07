import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grid from '@/components/Grid'
import Images from '@/components/Images'
import Accordion from '@/components/Accordion'

Vue.use(Router)

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
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
