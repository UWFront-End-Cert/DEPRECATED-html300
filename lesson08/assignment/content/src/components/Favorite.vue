<template>
<div :key=isFav class="favs">
<div v-if="isFav">
<button v-on:click="isFav = !isFav"><i class="fav fas fa-heart"></i></button>
</div>
<div v-if='!isFav'>
<button v-on:click="isFav = !isFav"><i class="notfav far fa-heart"></i></button>
</div>
</div>
</template>

<script>
export default {
name: 'favs',
data() {
return {
isFav: false
}
},

};
</script>


<style scoped lang='scss'>

@import './src/main.scss';


.notfav {
	color: $red;
	animation: $a-heart;
  display: inline;
	&:hover {
		transform: scale(1.6);
		animation: NULL;
		cursor: pointer;
		opacity: .8;
	}
}
.fav {
	color: $red;
	transform: scale(1.7);
	animation: NULL;
	color: $red;
	cursor: pointer;
	opacity: 1;
  display: inline;
  &:hover {
		transform: scale(1.6);
		cursor: pointer;
		opacity: .8;
	}
}

button{
border: none;
background: transparent;
}

.favs{
display: inline;
}
</style>
