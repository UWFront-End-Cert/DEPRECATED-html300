import Home from './components/home.vue'
import Contact from './components/contact.vue'
import Menu from './components/menu.vue'
import Blog from './components/blog.vue'
// import hw7 from './components/hw7.vue'
import hello from './components/HelloWorld.vue'

export default [
    // /=home page
    { path:'/', component: Home },
    { path:'/contact', component: Contact },
    { path:'/menu', component: Menu },
    { path:'/blog', component: Blog},
    // { path:'/hw7', component: hw7 },
    { path:'/hello', component: hello}
]