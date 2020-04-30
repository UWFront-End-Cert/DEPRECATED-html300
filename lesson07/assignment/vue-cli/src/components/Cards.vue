<template>
  <div class="cards">
  <h2 class='flipper'> Belize </h2>


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
color: $red;
cursor: pointer;
opacity:1;
}

</style>
