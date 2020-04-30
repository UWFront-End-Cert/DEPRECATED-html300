<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->
<!--https://github.com/kgrandemange/vue-flip-->
<!--https://codepen.io/RuudBurger/pen/bwjry-->
<!--https://codesandbox.io/s/vue-template-lmvtj?file=/src/App.vue



https://forum.vuejs.org/t/flip-just-one-element-at-a-time/83173/2

https://codesandbox.io/s/m354w1mmp9-->


   <div class="cards">



<font-awesome-icon id="root" @click="changeFav" v-bind:class="[isFav ? 'fav' : 'notfav' ]" icon="heart" />


  </div>
</template>

<script>

export default {
    name:'root',
    data(){
        return {
             isFav: false,
        }
    },
    methods:{
        changeFav(){
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
color: $red;
cursor: pointer;
opacity:1;
}

<<<<<<< HEAD
=======
#favorite{
display:inline-block;
}

>>>>>>> f53ab0dea91ae1dd8f965fe3c5cd1564d1387f94
</style>
