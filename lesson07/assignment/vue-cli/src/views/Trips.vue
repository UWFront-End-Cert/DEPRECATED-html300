<!--https://codepen.io/AndrewThian/pen/QdeOVa-->

<template>
  <div class="trips">
  <app-photos></app-photos>
  </div>
</template>

<script>
  //import your components here
  import Card from '@/components/Card.vue'
  export default {

    components: {
      'app-photos': Card
    }

 }

</script>
