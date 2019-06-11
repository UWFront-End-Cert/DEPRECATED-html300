<template lang="html">
  <div class="container-fluid">
  
    <h1>Cooking Blog</h1>
    <blogtable />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import foodtiles from '~/components/foodtiles.vue'
import blogtable from '~/components/blogtable.vue'
export default {
      components :{
          navbar,
          foodtiles,
          blogtable,
      }
}
</script>

<style lang="css" scoped>
*{
  text-align: center;
}
</style>
