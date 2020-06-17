// Copyright 2020 Markus Schiffer

import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/Images',
    name: 'Images',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Images.vue')
  },
  {
    path: '/Grid',
    name: 'Grid',
    component: () => import('../views/Grid.vue')
  },
  {
    path: '/Accordion',
    name: 'Accordion',
    component: () => import('../views/Accordion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
