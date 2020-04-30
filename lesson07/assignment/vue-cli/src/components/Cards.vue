<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->
<!--https://github.com/kgrandemange/vue-flip-->
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<!--https://codesandbox.io/s/vue-template-lmvtj?file=/src/App.vue
https://forum.vuejs.org/t/flip-just-one-element-at-a-time/83173/2
https://codesandbox.io/s/m354w1mmp9-->


<!--<div class="cards">
<h2 class='flipper'> Belize </h2>

<div class="card-flip" id=cardtwo>
   <div class="card__face">
      <div class="card__face--front">
         <div class="card" id="picture-1">
         </div>
      </div>
      <div class="card__face--back">
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


  </div>-->







  <div class="cards">
    <div class="flipper" @click="flip(card)">
      <h2>{{card.location}}</h2></div>
     <div class='card__face'>
  <div class="card__face--front"
  v-bind:class="{ 'reveal-answer' : flipped }">
                    {{ card.front }}
                  </div>

  <div class="card__face--back" v-bind:class="{ 'reveal-answer' : flipped }">
  {{ card.details }}
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

.cards {
        width: 100%;
        height: auto;
        display: inline-block;
        cursor: pointer;

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
        }

        &.reveal-answer {
        }
    }

    .card__face--front, .card__face--back {
    backface-visibility: hidden;
    position: absolute;
    width: auto;
    display: inline-block;
    }
    .card__face--front {
        z-index: 0;
        backface-visibility: hidden;
        transform: rotateY(0deg);
        width:50%;
left:10%;
        height:50%;
        color: red;
        background: url('../assets/belize.png');
        &.reveal-answer {
            transform: rotateY(180deg);
        }
    }

    .card__face--back {
    backface-visibility: hidden;
        transform: rotateY(180deg);
        color:green;
        background-color: grey;
        flex-direction: column;
        z-index:1;
        &.reveal-answer {transform: rotateY(0deg);}
    }

}

</style>
