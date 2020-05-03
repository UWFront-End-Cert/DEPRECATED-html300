<template>
<div class='travel-photos'>
<div v-for="(item, idx) in decks" :key="idx">
    <app-photos :card='item'></app-photos>
    </div>
</div>
</template>




<script>

import Images from '@/components/Images.vue'
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
