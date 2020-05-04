<template>
<div class='travel-photos'>
<div v-for="(item, idx) in decks" :key="idx">
    <app-photos :card='item'></app-photos>
    </div>
</div>
</template>


<script>

import Images from '@/components/Images.vue'

//tried moving decks variable to main.js and importing into .vue
//import {decks} from 'main.js'
//get unused vars error - how do I fix this to only have this variable in one place?
//would also like to add images array to decks object and populate more than one per place in travel photos page
//- selecting first image for trips cards - might get it to work later

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

  export default {
    name: 'TravelPhotos',

    components: {
      'app-photos': Images
    },
    data(){
        return {
        decks: decks
                }
    },
 }
</script>
