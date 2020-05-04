<template>
  <div class='Home'>
    <app-jumbo></app-jumbo>
    <app-caro :card='decks'></app-caro>



  </div>
</template>

<script>

//tried moving decks variable to main.js and importing into .vue
//import {decks} from 'main.js'
//get unused vars error - how do I fix this to only have this variable in one place?

var decks = [
{'id': 'belize',
'location': 'Belize',
'images':'belize.png',
'imagelink': '/travel-photos#belize',
text: "Picture of Belize"},
{'id': 'costarica',
'location': 'Costa Rica',
'images':'costarica.png',
'imagelink': '/travel-photos#costarica',
text: "Costa Rica - Manuel Antonio National Park"},
{'id': 'croatia',
'location': 'Croatia',
'images':'croatia.png',
'imagelink': '/travel-photos#croatia',
text: "Picture of Croatia"},
{'id': 'italy',
'location': 'Italy',
'images':'italy.png',
'imagelink': '/travel-photos#italy',
text: "Picture of Italy"},
{'id': 'thailand',
'location': 'Thailand',
'images':'thaibeach.png',
'imagelink': '/travel-photos#thailand',
text: "Picture of beach in Thailand"}
];

  //import your components here
  import Jumbo from '@/components/Jumbotron.vue'
  import Caro from '@/components/Carousel.vue'
  export default {
  name: 'Home',
    components: {
      'app-jumbo': Jumbo,
      'app-caro' : Caro
    },
    data(){
        return {
        decks: decks
                }
    },
 }
</script>
