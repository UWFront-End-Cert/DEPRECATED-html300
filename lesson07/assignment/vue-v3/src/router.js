import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Images from './views/Images.vue'
import Grid from './views/Grid.vue'
import Accordian from './views/Accordian.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accordian',
      name: 'accordian',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Accordian
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
  ]
})
