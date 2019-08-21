<template>
	<div class="image_template">
		<div class="poster" v-for="link in album" v-bind:key='link.id'>
		<img v-bind:src='link.src' v-bind:alt='link.alt' class="img-fluid img-thumbnail">
		<p>{{link.title}}</p>
		<p>{{link.info}}</p>
	</div>
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

<script>
	
	export default{
        
		name: "AppImages",
		data () {
            return{
                album: [{ id: 1, title:'Beautiful Waterfall', info:'(Click on the Image to change the border)', alt:'Beautiful Waterfall', src: require('../src/assets/img-1.jpg')}, 
                        { id: 2, title:'Deep in the Forest', info:'(Click on the Image to change the border)', alt:'Deep in the Forest', src: require('../src/assets/img-2.jpg')},
                        { id: 3, title:'Stunning Mountains', info:'(Click on the Image to change the border)', alt:'Stunning Mountains', src: require('../src/assets/img-3.jpg')},
                        { id: 4, title:'Lost in the Woods', info:'(Click on the Image to change the border)', alt:'Lost in the Woods', src: require('../src/assets/img-7.jpg')},
                        { id: 5, title:'Lonely Tree', info:'(Click on the Image to change the border)', alt:'Lonely Tree', src: require('../src/assets/img-8.jpg')},
                        { id: 6, title:'Sunset in Jungle', info:'(Click on the Image to change the border)', alt:'Sunset in Jungle', src: require('../src/assets/img-9.jpg')}
                        ],
                     

            }
		}
	}
</script>