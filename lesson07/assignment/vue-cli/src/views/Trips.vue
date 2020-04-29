<template>
  <div class="Trips">
    <app-trips></app-trips>
  </div>
</template>

<script>
  //import your components here
  import Cards from '@/components/Cards.vue'
  export default {
  name: 'Trips',
    components: {
      'app-trips': Cards
    }
 }
</script>
