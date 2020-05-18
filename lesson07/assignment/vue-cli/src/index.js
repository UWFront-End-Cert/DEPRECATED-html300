import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Images from '@/components/images.vue'
import Grid from '@/components/grid.vue'
import Accordian from '@/components/Accordian.vue'

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
      component: Images
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/Accordian',
      name: 'Accordian',
      component: Accordian
    }
  ]
})
