<template lang="html">
  <div class="container-fluid">
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
