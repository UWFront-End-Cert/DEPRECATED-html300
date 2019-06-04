<template>
  <section id="app"  class="container-fluid">
      <div class="jumbotron">
        <h1 class="display-4">Food Recipes</h1>
        <p class="lead"> For Food Lovers </p>
      </div>
      <page-header pagetitle ="Food Recipes"  pagelead = "For Food Lovers"></page-header>
      <navbar />
      <imageslides />
      <foodtiles />

  </section>
</template>

<script>
import navbar from '~/components/navbar.vue'
import foodtiles from '~/components/foodtiles.vue'
import imageslides from '~/components/image-slides.vue'
export default {
  components: {
    navbar,
    foodtiles,
    imageslides,

  }
}
</script>

<style>
*{
  text-align: center;
}

</style>
