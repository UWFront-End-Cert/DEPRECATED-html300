<template>
  <div class="container-fluid">
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
