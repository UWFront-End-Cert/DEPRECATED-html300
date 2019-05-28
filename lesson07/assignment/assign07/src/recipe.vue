<template>
  <div id="recipe">
    <Header />
    <Topnav />
    <Mainpagetitle />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Topnav from './components/Topnav.vue'
import Mainpagetitle from './components/Mainpagetitle.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'recipe',
  components: {
    Header,
    Topnav,
    Mainpagetitle,
    Footer
  },
}


</script>

<style>
#recipe {
text-align: center;
margin-top: 30px;
}
</style>
