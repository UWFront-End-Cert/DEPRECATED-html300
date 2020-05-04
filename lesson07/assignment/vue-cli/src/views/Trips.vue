<template>
<div class="Trips">
   <b-row>
      <b-col lg = '2' sm="12">
      <search :decks='decks'></search>
      </b-col>
      <b-col lg = '10' sm="12">
         <div class='card-multiple'>
            <b-row>
               <b-col md = '6' lg ='4' sm="12" v-for="(card, idx) in decks" :key="idx" :id="card.id">
                  <card-single :card='card'> </card-single>
               </b-col>
            </b-row>
         </div>
      </b-col>
   </b-row>
</div>
</template>

<script>
  import Card from '@/components/Card.vue'
  import Searchbar from '@/components/Searchbar.vue'

  //tried moving decks variable to main.js and importing into .vue
  //import {decks} from 'main.js'
  //get unused vars error - how do I fix this to only have this variable in one place?

  var decks = [
  {'id': 'belize',
  'location': 'Belize',
  'images':'belize.png',
  'area': 'Central America',
  'imagelink': '/travel-photos#belize', //this id section thing doesn't work correctly
  text: "Picture of Belize"},
  {'id': 'costarica',
  'location': 'Costa Rica',
  'images':'costarica.png',
  'imagelink': '/travel-photos#costarica',
  'area': 'Central America',
  text: "Costa Rica - Manuel Antonio National Park"},
  {'id': 'croatia',
  'location': 'Croatia',
  'images':'croatia.png',
  'area': 'Europe',
  'imagelink': '/travel-photos#croatia',
  text: "Picture of Croatia"},
  {'id': 'italy',
  'location': 'Italy',
  'images':'italy.png',
  'area': 'Europe',
  'imagelink': '/travel-photos#italy',
  text: "Picture of Italy"},
  {'id': 'thailand',
  'location': 'Thailand',
  'images':'thaibeach.png',
  'area': 'Asia',
  'imagelink': '/travel-photos#thailand',
  text: "Picture of beach in Thailand"}
  ];
  export default {
  name: 'Trips',
  components: {
    'card-single': Card,
    'search': Searchbar  },
  data(){
      return {
      decks: decks
              }
  }
  };


</script>
