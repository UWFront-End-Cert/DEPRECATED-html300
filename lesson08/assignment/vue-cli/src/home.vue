<template lang="html">
  <div class="">
    <imageslides />
    <h1>Recipes of this weeek</h1>
    <recipestiles />
  </div>

</template>

<script>
    import recipestiles from './components/recipestiles.vue'
    import imageslides from './components/image-slides.vue'
    export default {
          components :{
              recipestiles,
              imageslides,
          }
    }
</script>

<style lang="css" scoped>
</style>
