<template>
   <div class="Trips">
      <b-row>
         <b-col lg = '2' sm="12">
         <div class="search-wrapper">
                 <label>
                     <h2>Search</h2>
                 </label>
                 <input type="text" v-model="search" placeholder="Search location..."/>
                 <div class='side'>
                     <ul class="side__list" data-title="Central America">

<!--<div :key=checkCA>
<input type="checkbox" v-on:click="checkCA = !checkCA" @click="checkCA ? areaFilter(''): areaFilter('central america') ">
</div>-->
<input checked type="checkbox" v-on:click="checkCA = !checkCA" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">


                         <div  v-for="(card, idx) in decks" v-bind:key="idx">
                             <div  v-if='card.area == "Central America"'>
                                 <li class="side__item">
                                     {{card.location}}
                                 </li>
                             </div>
                         </div>
                     </ul>
                     <ul class="side__list"  data-title="Asia">
                     <input checked type="checkbox" v-on:click="checkA = !checkA" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">

                          <div  v-for="(card, idx) in decks" v-bind:key="idx">
                             <div  v-if='card.area == "Asia"'>
                                 <li class="side__item">
                                     {{card.location}}
                                 </li>
                             </div>
                         </div>
                     </ul>
                     <ul class="side__list"  data-title="Europe">
                     <input checked type="checkbox" v-on:click="checkE = !checkE" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">

                         <div v-for="(card, idx) in decks" v-bind:key="idx">
                             <div v-if='card.area == "Europe"'>
                                 <li class="side__item">
                                     {{card.location}}
                                 </li>
                             </div>
                         </div>
                     </ul>
                     <!-- Other should not be shown but is there incase new continent needs to be added -->
                     <div v-for="(card, idx) in decks" v-bind:key="idx">
                         <div v-if='!["Europe", "Asia", "Central America"].includes(card.area)'>
                             <ul class="side__list"  data-title="Other" >
                                 <li class="side__item">
                                     {{card.location}}
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>

         </b-col>
         <b-col lg = '10' sm="12">
            <div class='card-multiple'>
               <b-row>
                  <b-col md = '6' lg ='4' sm="12" v-for="(card, idx) in flist" :key="idx" :id="card.id">
                     <card-single :card='card'> </card-single>
                  </b-col>
               </b-row>
            </div>
         </b-col>
      </b-row>
   </div>
</template>

<script>
import { decks } from '../util.js'

import Card from '@/components/Card.vue'
//import Searchbar from '@/components/Searchbar.vue'
export default {
	name: 'Trips',
	components: {
		'card-single': Card
    //,
	//	'search': Searchbar
	},
  computed: {
  // arguments: reference to select list, callback function (optional)


     flist: function(){
       return this.decks.filter(function (litem) {
         // if both search & area have been set, use && in conditional
         // if only search has a value, only use it
         // else if area, only use it

         let areaSet = this.area != []

         let searchSet = this.search != ''


         //console.log(areaSet);

         let includesSearchTerm = (litem.location.toLowerCase().includes(this.search.toLowerCase()))
         //console.log(litem.area);
         //let isInArea = (litem.area.toLowerCase() === this.area.toLowerCase())
         let isInArea = (this.area.includes(litem.area.toLowerCase()))
         console.log(isInArea);

         if (areaSet && searchSet){
           // check that both area & search match
           return includesSearchTerm && isInArea
         } else if(areaSet){
           return isInArea
         } else if(searchSet){
           return includesSearchTerm
         }
         return true
       }, this)
     }
   },
	data() {
		return {


    search: '',
             area: '',
             checkCA: true,
             checkA: true,
             checkE: true,

             getSelectedOptions: function(checkCA, checkA, checkE) {
             var opts = [];
             if(checkCA) {opts.push('central america'.toLowerCase())}
             if(checkA) {opts.push('asia'.toLowerCase())}
             if(checkE) {opts.push('europe'.toLowerCase())}

             return opts;
             },


             areaFilter: function(area){
             console.log("area filter with ", area)
               this.area = area
             },


			decks: decks.filter( function(litem) {
      return litem.area !=null;
      })
		}
	}
};
</script>



<style scoped lang='scss'>
@import './src/main.scss';
.side {
	margin-top: 1em;
	text-align: left;
	display: block;
	padding: .5rem;
	&__list {
		text-align: left;
	}
	&__list[data-title]::before {
		content: attr(data-title);
	}
}

ul {
	display: block;
	@include media-query($mq: 'md') {
		display: inline-block;
	}
}

ul[data-title]::before {
	content: attr(data-title);
	text-decoration: underline;
	font-weight: bold;
	padding: 0;
}

h2 {
	padding: .5em;
	text-align: center;
}

</style>
