<template>
  <div id="app">
    <Header />
    <Topnav />
    <Recipetitle />
    <Mainpagetitle />
    <Mainpagetitle />
    <Mainpagetitle />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Topnav from './components/Topnav.vue'
import Mainpagetitle from './components/Mainpagetitle.vue'
import Footer from './components/Footer.vue'
import Recipetitle from './components/Recipetitle.vue'

export default {
  name: 'app',
  components: {
    Header,
    Topnav,
    Recipetitle,
    Mainpagetitle,
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
