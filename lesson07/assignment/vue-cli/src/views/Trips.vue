<template>
  <div class="Trips">
  <!--<b-container>
  <b-col cols='3'>
  <b-row>-->
    <app-favs></app-favs>
    <app-card></app-card>

  </div>
</template>

<script>


  //import your components here
  import Favorite from '@/components/Favorite.vue'
  import Cards from '@/components/Cards.vue'
  export default {
  name: 'Trips',
    components: {
      'app-favs': Favorite,
      'app-card': Cards
    }
 }
</script>
