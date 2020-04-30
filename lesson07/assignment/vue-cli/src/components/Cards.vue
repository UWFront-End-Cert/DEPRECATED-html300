<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->
<!--https://github.com/kgrandemange/vue-flip-->
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<!--https://codesandbox.io/s/vue-template-lmvtj?file=/src/App.vue
https://forum.vuejs.org/t/flip-just-one-element-at-a-time/83173/2
https://codesandbox.io/s/m354w1mmp9-->

<div class="cards">
   <div class="flipper" @click="flip(card)">
      <h2>{{card.location}}</h2>
   </div>
   <div class="card-flip" v-bind:class="{ 'is-flipped' : flipped }">
      <div class='card__face'>
         <div class="card__face--front">
            {{ card.front }}
         </div>
         <div class="card__face--back">
            {{ card.details }}
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
var deck1 = [{'location': 'belize','images':'../assets/belize.png','details': 'link link link'}];
export default {
    name:'cards',
    data(){
        return {
        card: deck1[0],
        flipped:false
        }
    },
    methods:{
    flip: function(){
      this.flipped = !this.flipped;
      console.log(this.flipped)
    }
    }
};
</script>


<style scoped lang='scss'>
@import './src/main.scss';

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
	position: relative;
}

.card__face--front,
.card__face--back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.card__face--front {
	z-index: 2;
	transform: rotateY(0deg);

  background: url('../assets/belize.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  background-position: center;
}

.card__face--back {
	transform: rotateY(180deg);
}

.card-block {
	height: 15rem;
	overflow: hidden;
}


.flipper {
        width: auto;
        height: 100%;
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
        }}


</style>
