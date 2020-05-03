<template>
<!--ideas-->
<!--https://forum.vuejs.org/t/another-component-inside-v-for-how-to-pass-props-dynamically/46093/13-->
<div class='card-multiple'>
<b-row>

<b-col md = '6' lg ='4' sm="12" v-for="(card, idx) in decks" :key="idx" :id="card.id">
   <b-container >


         <card-single :card='card'> </card-single>


   </b-container>
</b-col>
  </b-row>
</div>

</template>

<script>
import Card from '@/components/Card.vue'
var decks = [
{'id': 'belize',
'location': 'Belize',
'images':'belize.png',
'imagelink': '/travel-photos#belize', //this id section thing doesn't work correctly
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
    name:'cards',
    components: {
      'card-single': Card
    },
    data(){
        return {
        decks: decks
                }
    },

    };
</script>


<style scoped lang='scss'>
@import './src/main.scss';

.col-4{
display:inline-block;
}

</style>
