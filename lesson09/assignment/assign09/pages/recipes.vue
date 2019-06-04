<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="display-4">Food Recipes</h1>
      <p class="lead"> For Food Lovers </p>
    </div>
    <page-header pagetitle ="Food Recipes"  pagelead = "For Food Lovers"></page-header>
    <navbar />
    <h1>More Recipes</h1>
      <foodtiles />
      <foodtiles />
      <foodtiles />
      <foodtiles />
  </div>
</template>

<script>
    import navbar from '~/components/navbar.vue'
    import foodtiles from '~/components/foodtiles.vue'
    export default {
          components :{
              navbar,
              foodtiles,
          }
    }
</script>

<style lang="css" scoped>
*{
  text-align: center;
}
</style>
