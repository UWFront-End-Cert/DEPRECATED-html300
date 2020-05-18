import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Images from '@/components/images.vue'
import Grid from '@/components/grid.vue'
import Accordion from '@/components/Accordion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/images',
      name: 'images',
      component: images
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: accordion
    }
  ]
})
