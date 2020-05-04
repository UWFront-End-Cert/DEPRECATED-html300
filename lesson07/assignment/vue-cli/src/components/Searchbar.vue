<template>
   <div class="search-wrapper">
      <label>
         <h2>search</h2>
      </label>
      <input type="text"  placeholder="This doesn't work yet"/>
      <div class='side'>
         <ul class="side__list" data-title="Central America">
            <div  v-for="(card, idx) in decks" v-bind:key="idx">
               <div  v-if='card.area == "Central America"'>
                  <!--couldn't not figure out more clever way to get unique area values-->
                  <li class="side__item">
                     {{card.location}}
                  </li>
               </div>
            </div>
         </ul>
         <ul class="side__list"  data-title="Asia">
            <div  v-for="(card, idx) in decks" v-bind:key="idx">
               <div  v-if='card.area == "Asia"'>
                  <li class="side__item">
                     {{card.location}}
                  </li>
               </div>
            </div>
         </ul>
         <ul class="side__list"  data-title="Europe">
            <div v-for="(card, idx) in decks" v-bind:key="idx">
               <div v-if='card.area == "Europe"'>
                  <li class="side__item">
                     {{card.location}}
                  </li>
               </div>
            </div>
         </ul>
      </div>
   </div>
   <!-- any tips on getting the search to work with my layout would be appreciated -->
   <!--https://codepen.io/AndrewThian/pen/QdeOVa-->
   <!--https://stackoverflow.com/questions/45907887/vuejs-2-input-filter-groups-->
   <!--https://forum.vuejs.org/t/search-filter-with-computed-properties/29393-->
   <!--https://codepen.io/SitePoint/pen/maMJzo-->
   <!--https://www.sitepoint.com/the-difference-between-computed-properties-methods-and-watchers-in-vue/-->


</template>

<script>
	export default {
		name: 'search',

		props: {
			decks: {
				type: Array,
				required: true
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
