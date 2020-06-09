<template>
  <section class="container">
<!--image Page for the World of Butterflies - page 2-->


<!--header stuff this slot will insert the Butterfly Header component text-->
<div class="header">
 <slot name="butterfly-header"></slot>
</div>


 <!--nav bar-->
  <div class="nav" style="background-color: #eb34e5;">
    <img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
    <h3>Our Menu</h3>
      <!--<nuxt-link to="/butterfly-zoo" class="butterlinks">Butterfly Museum</nuxt-link>
      <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
       <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>-->
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
  import butterflyHeader from "@/components/butterflyHeader";
  import carousel from "./components/carousel.vue";

  export default {
    name: 'butterfly-header',
    name: 'carousel'
    components: {
      'butterfly-header': butterflyHeader,
      'carousel': carousel
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

    .header {
      display: block;
      width: 100%;
      padding: 3%;
      background-color: 08fc3d;
      color: white;
    }

    .nav {
      background-color: #eb34e5;
      width: 100%;
      padding: 2%;
      color: white;
      }



    .butter-logo {
      width: 10px;
      height: 10%;
      color: green;
    }

    .butterlinks {
      color: white;
      text-decoration: none;
      padding: 2%;
    }

    .links {
      padding-top: 15px;
    }

    </style>
