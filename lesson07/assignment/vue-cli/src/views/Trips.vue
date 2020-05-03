<template>
  <div class="Trips">

    <app-card></app-card>

  </div>
</template>

<script>


  //import your components here
  import Cards from '@/components/Cards.vue'
  export default {
  name: 'Trips',
    components: {
      'app-card': Cards
    }
 }
</script>
