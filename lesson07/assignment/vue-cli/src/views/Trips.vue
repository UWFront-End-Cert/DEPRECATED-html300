<template>
  <div class="Trips">

    <!--<app-favs></app-favs>-->
    <app-card></app-card>

  </div>
</template>

<script>


  //import your components here
  //import Favorite from '@/components/Favorite.vue'
  import Card from '@/components/Card.vue'
  export default {
  name: 'Trips',
    components: {
      //'app-favs': Favorite,
      'app-card': Card
    }
 }
</script>
