<template>
<div class="favs">
    <div v-if="fav">
        <font-awesome-icon  class='fav' v-on:click="fav = !fav" icon="heart" />
    </div>
    <div v-else>
        <!-- could not get fa-heart-o or far-heart to work so used opacity instead -->
        <font-awesome-icon  class='notfav' v-on:click="fav = !fav" icon="heart" />
    </div>
</div>
</template>

<script>
export default {
    name: 'favs',
    data() {
        return {
            fav: false,
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
		transform: scale(1.6);
		animation: NULL;
		cursor: pointer;
		opacity: .8;
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
</style>
