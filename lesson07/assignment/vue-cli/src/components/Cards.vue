<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->
<!--https://github.com/kgrandemange/vue-flip-->
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<!--https://codesandbox.io/s/vue-template-lmvtj?file=/src/App.vue



https://forum.vuejs.org/t/flip-just-one-element-at-a-time/83173/2

https://codesandbox.io/s/m354w1mmp9-->


   <div class="cards">



      <h2 class='flipper'> Belize </h2>

      <div id="favorite">
         <font-awesome-icon @click="changeFav" v-bind:class="[isFav ? 'fav' : 'notfav' ]" icon="heart" />
      </div>

      <div class="card-flip" id=cardfive>
         <div class="card__face">
            <div class="card__face--front">
               <div class="card" id="picture-6">
               </div>
            </div>
            <div class="card__face--back">
               <!-- back content -->
               <div class="card">
                  <div class="card-block">
                     <a href="#" class="card-link">Weather</a>
                     <a href="#" class="card-link">Itenerary Ideas</a>
                     <a href="#" class="card-link">Travel Photos</a>
                     <a href="#" class="card-link">Recommended Transportation and Hotels</a>
                  </div>
               </div>
            </div>
         </div>
      </div>




   </div>
</template>





<script>

export default {
	name: 'cards',

	data() {
		return {
			isFav: false,
		}
	},
	methods: {
		changeFav() {
			this.isFav = !this.isFav
		}


	}
};

</script>





<style scoped lang='scss'>
@import './src/main.scss';


//flipper

.flipper {
  vertical-align: top;
	position: relative;
	display: inline-block;
  //adding:1rem;
  //margin:1rem;
	&:before,
	&:after {
		@include underline-main;
	}
	&:before {
		left: 50%;
	}
	&:after {
		right: 50%;
	}
	&:hover {
		cursor: pointer;
		&:before,
		&:after {
			width: 50%;
			opacity: 1;
		}
	}
}

//favorite
.notfav > path{

color:$red;
opacity:.5;
//padding: .5rem;
//margin: .5rem;
animation: $a-heart;

&:hover{
transform: scale(1.7);
animation: NULL;
cursor: pointer;
opacity:1;
}}

.fav > path{
color:$red;
transform: scale(1.7);
animation: NULL;
cursor: pointer;
opacity:1;
}

#favorite{
display:inline-block;
}

</style>
