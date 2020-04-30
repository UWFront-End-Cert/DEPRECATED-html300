<template>
   <div class="favs">
      <font-awesome-icon @click="changeFav" v-bind:class="[isFav ? 'fav' : 'notfav' ]" icon="heart" />
   </div>
</template>

<script>

export default {
	name: 'favs',
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

.notfav>path {
	color: $red;
	opacity: .5;
	animation: $a-heart;
	&:hover {
		transform: scale(1.7);
		animation: NULL;
		cursor: pointer;
		opacity: 1;
	}
}

.fav>path {
	color: $red;
	transform: scale(1.7);
	animation: NULL;
	color: $red;
	cursor: pointer;
	opacity: 1;
}

#favorite {
	display: inline-block;
}

</style>
