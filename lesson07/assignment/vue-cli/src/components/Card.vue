<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->
<!--https://github.com/kgrandemange/vue-flip-->
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<!--https://codesandbox.io/s/vue-template-lmvtj?file=/src/App.vue
https://forum.vuejs.org/t/flip-just-one-element-at-a-time/83173/2
https://codesandbox.io/s/m354w1mmp9-->


<!--https://jsfiddle.net/nicolai_lebek/g6k3v49f/3/-->


<div class='card-single'>
   <b-container >
      <b-row>
         <b-col cols='4' v-for="(card, idx) in decks" :key="idx" :id="card.id">
            <app-favs></app-favs>
            <div class="flipper" @click="flip()" >
               <h2>{{card.location}}</h2>
            </div>
            <div class="card-flip" v-bind:class="{ 'is-flipped' : flipped }" >
               <div class='card__face'>
                  <div class="card__face--front">

                  <div class="wrapper">
                  <div class="zoom-effect-container">
                    <div class="image-card">
                    <img :src="getImgUrl(card.images)" />
                        <!--<img src="../assets/belize.png"/>-->
                    </div>
                  </div>
                  </div>

                  </div>
                  <div class="card__face--back">
                     {{ card.details }}
                     <div class="card">
                        <div class="card-block">
                           <a href="#" class="card-link">Weather</a>
                           <a href="#" class="card-link">Itenerary Ideas</a>
                           <a :href="card.imagelink" target="_blank" class="card-link">Travel Photos</a>
                           <a href="#" class="card-link">Recommended Transportation and Hotels</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </b-col>
      </b-row>
   </b-container>
</div>

</template>

<script>
import Favorite from '@/components/Favorite.vue'
var deck1 = [{'id': 'belize',
'location': 'Belize',
'images':'belize.png',
'imagelink': '/travel-photos#belize'}];


export default {
    name:'card',
    components: {
      'app-favs': Favorite
    },
    data(){
        return {
        decks: deck1,
        flipped:false
        }
    },
    methods:{
    flip: function(){
      this.flipped = !this.flipped;
      console.log(this.flipped)
    },
    getImgUrl: function(pic){
    return require('@/assets/'+pic)
    }
    }
};
</script>


<style scoped lang='scss'>
@import './src/main.scss';

.wrapper {
  width: auto;
  height: 100%;
  margin: 0 auto;
}

.zoom-effect-container {
    //float: left;


    position: relative;
    width: auto;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.image-card {
  position: absolute;
  bottom:-50%;
  left: 0;

}

.image-card img {
  transition: 3s ease;
  object-fit: cover;
  width: 100%;
}

.zoom-effect-container:hover .image-card img {
  transform: scale(1.08);
}

.card-flip {
	perspective: 1000px;
}

.card-flip,
.card__face--front,
.card__face--back {
	width: 100%;
	height: 480px;
}

.card-flip.is-flipped .card__face {
	transform: rotateY(180deg);
}

.card__face {
	transition: transform 1s;
	transition-timing-function: linear;
	transform-style: preserve-3d;
	position: relative;}

.card__face--front,
.card__face--back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.card__face--front {
	width: 100%;
	z-index: 2;
	transform: rotateY(0deg);
	height: 15rem;}


a {
	display: block;
	padding: 5%;
	&:hover {
		font-weight: bold;
	}
}

.favs {
	display: inline-block;
	padding-right: .5rem;
}

.card__face--back {
	transform: rotateY(180deg);
}

.card-block {
	height: 15rem;
	overflow: hidden;
}

.flipper {
  padding-left:1em;
	width: auto;
	height: 8%;
	color: $lighten-black;
	vertical-align: top;
	position: relative;
	display: inline-block;
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
		&:before,
		&:after {
			width: 50%;
			opacity: 1;
		}
	}
}
</style>
