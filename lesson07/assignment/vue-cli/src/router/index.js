import Vue from 'vue'
import Router from 'router'
import Helloworld from './components/Helloworld'
import Images from './components/images'
import Grid from './components/grid'
import Accordian from './components/Accordian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Helloworld
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
