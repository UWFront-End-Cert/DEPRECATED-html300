<template>
  <div id="app">
    <Header />
    <Topnav />
    <Recipetitle />
    <Blogtitle />
    <BlogDescription />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Topnav from './components/Topnav.vue'
import Blogtitle from './components/Blogtitle.vue'
import BlogDescription from './components/BlogDescription.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Topnav,
    Blogtitle,
    BlogDescription,
    Footer
  },
}


</script>

<style>
#app {
text-align: center;
margin-top: 30px;
}
</style>
