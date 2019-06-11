<template>
  <section class="container-fluid">
      <imageslides />
      <foodtiles />

  </section>
</template>

<script>
import navbar from '~/components/navbar.vue'
import pageheader from '../components/pageheader.vue'
import foodtiles from '~/components/foodtiles.vue'
import imageslides from '~/components/image-slides.vue'
export default {
  components: {
    navbar,
    foodtiles,
    imageslides,
    pageheader
  }
}
</script>

<style>
*{
  text-align: center;
}

</style>
