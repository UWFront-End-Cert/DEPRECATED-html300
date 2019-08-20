import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Images from './views/images.vue'
import Grid from './views/grid.vue'
import Accordion from './views/accordion.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - Vue App'
      }
    },
    {
      path: '/images',
      name: 'images',
      component: Images,
      meta: {
        title: 'Images Page - Vue App'
      }
    },
        {
      path: '/grid',
      name: 'grid',
      component: Grid,
      meta: {
        title: 'Grid Page - Vue App'
      }
    },
        {
      path: '/accordion',
      name: 'accordion',
      component: Accordion,
      meta: {
        title: 'Accordion Page - Vue App'
      }
    }
  ]
});

