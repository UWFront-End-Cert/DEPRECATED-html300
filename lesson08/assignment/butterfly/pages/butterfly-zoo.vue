<template>
  <section class="container">
    <!--this is the image page/museum page - page number 2-->

    <!--header stuff this slot will insert the Butterfly Header component text-->
       <div class="header">
         <slot name="butterfly-header"></slot>
       </div>

<!--nav bar stuff-->
     <div class="nav" style="background-color: #eb34e5;">
       <img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
       <h3>Our Menu</h3>
          <nuxt-link to="/" class="butterlinks">Home</nuxt-link>
          <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
          <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>
      </div>
      <div>
        <carousel />
      </div>
      <div>
      <nuxt-link to="/fanArt">Click here to see Butterfly Fan Art!</nuxt-link>
      <div>
  </section>
</template>

<script>
import butterfly-header from "@/components/butterflyHeader";
//import navBar from '@/components/navBar'
import carousel from "./components/carousel.vue";

export default {
  components: {
    'butterfly-header': butterflyHeader,
    //  navBar
  },
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #b8d4fc;
}

.nav {
  background-color: #eb34e5;
  width: 100%;
  padding: 2%;
  color: white;
  }


body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.butterlinks {
  color: white;
  text-decoration: none;
  padding: 2%;
}

</style>
