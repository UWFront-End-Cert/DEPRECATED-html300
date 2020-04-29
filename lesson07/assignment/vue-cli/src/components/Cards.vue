<template>
  <div class="cards">
  <h2 class='flipper'> Belize </h2>

<div id="root">
<button @click="changeFav">
<font-awesome-icon v-bind:class="[isFav ? 'fav' : 'notfav' ]" icon="heart" />
</button></div>

  </div>
</template>



<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->


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
            console.log(this.isFav);
        }
    }
};
     </script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import './src/main.scss';
.flipper {
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
		cursor: pointer;
		&:before,
		&:after {
			width: 50%;
			opacity: 1;
		}
	}
}


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
transform: scale(1.7);
animation: NULL;
cursor: pointer;
opacity:1;
}

button{
border:0;
margin-right:1.5rem;
padding-right:1.5rem;
padding-bottom:1rem;
background-color:white;
}

</style>
