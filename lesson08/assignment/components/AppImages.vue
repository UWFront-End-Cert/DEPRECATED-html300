<template>
		<div class="poster">
			<img v-bind:src='link.src' v-bind:alt='link.alt' class="img-fluid img-thumbnail">
			<p class="title">{{ link.title }}</p>
			<button>Apply Fancy border</button>
</div>
</template>

<style lang="scss" scoped>

.poster{
	display: flex;
	flex-direction: column;
}
.image_template{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    img{
        width: 30%;
        margin-bottom: 1%;
        object-fit: cover; 
    }
}

</style>

<script>
	
	export default{
        
		name: "AppImages",
		props:['src', 'alt', 'title']
	}
</script>