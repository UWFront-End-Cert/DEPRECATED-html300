import Vue from 'vue'
import Router from 'vue-router'
//Import the pages from the components folder
import Hello from '@/components/HelloWorld'
import Teams from '@/components/Teams'
import Rules from '@/components/Rules'
import Contact from '@/components/Contact'


Vue.use(Router)

// List of routes/pages in project
export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})