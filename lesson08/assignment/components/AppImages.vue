<template>
<!-- <div> -->
		<!-- <slot></slot> -->
<!-- </div> -->
	<div class="image_template">
		<div class="poster" v-for="(link, index) in album" :key='index'>
		<img  :src='link.src' :alt='link.alt' :class="{'img-thumbnail' : link.isActive}" class="img-fluid " @click="link.isActive = !link.isActive">
		<p>{{link.title}}</p>
		<p>{{link.info}}</p>
	</div>
	</div>
	
</template>


<script>
	
	export default{
		props:['album'],
	}
</script>

<style lang="scss" scoped>

.img-thumbnail{
	
}
.poster{
	display: flex;
	flex-direction: column;
}
.image_template{
	display: flex;
		justify-content: space-around;
	flex-flow: row wrap;
	.poster{
		width: 30%;
		margin-bottom: 1%;
		img{
		object-fit: cover; 
		}
		p{
		color: grey;
		font-style: italic;
		}
}}

</style>

