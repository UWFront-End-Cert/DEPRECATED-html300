import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/noms',
      name: 'noms',
      component: () => import(/* webpackChunkName: "noms" */ './views/Noms.vue')
    },
    {
      path: '/sippins',
      name: 'sippin&#39;s',
      component: () => import(/* webpackChunkName: "sippins" */ './views/Sippins.vue')
    },
  ]
})
