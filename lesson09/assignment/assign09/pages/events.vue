<template lang="html">
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="display-4">Food Recipes</h1>
      <p class="lead"> For Food Lovers </p>
    </div>
    <page-header pagetitle ="Food Recipes"  pagelead = "For Food Lovers"></page-header>
    <navbar />
    <h1>Upcoming Events</h1>
    <eventstable />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import foodtiles from '~/components/foodtiles.vue'
import eventstable from '~/components/eventstable.vue'

export default {
      components :{
          navbar,
          foodtiles,
          eventstable,
      }
}
</script>

<style lang="css" scoped>
*{
  text-align: center;
}
</style>
