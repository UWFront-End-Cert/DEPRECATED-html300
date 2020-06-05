import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Image from "../views/image.vue"
import Gridsystem from "../views/gridsystem.vue"
import Accordion from "../views/accordion.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Image',
      components: Image
    },
    {
      path: '/',
      name: 'Gridsystem',
      components: Gridsystem
    },
    {
      path: '/',
      name: 'Accordion',
      components: Accordion
    },
  ]
})
