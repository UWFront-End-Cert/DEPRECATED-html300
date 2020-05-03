<template>
  <div class="Trips">

<b-row>
  <b-col lg = '2' sm="12">
      <app-search></app-search>
      </b-col>
<b-col lg = '10' sm="12">

    <app-card></app-card>
    </b-col>
  
  </b-row>
  </div>
</template>

<script>


  //import your components here
  import Cards from '@/components/Cards.vue'
  import Search from '@/components/Searchbar.vue'
  export default {
  name: 'Trips',
    components: {
      'app-card': Cards,
      'app-search': Search
    }
 }
</script>
