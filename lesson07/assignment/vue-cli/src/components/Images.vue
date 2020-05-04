<template>
   <section class="images" :id="card.id">
      <h2 > {{card.location}}</h2>
      <b-img
         :alt="card.text"
         :src="getImgUrl(card.images)"
         fluid></b-img>
   </section>
</template>

<script>
	export default {
		name: 'Images',
		props: {
			card: {
				type: Object,
				required: true
			}
		},
		methods: {
			getImgUrl: function (pic) {
				return require('@/assets/' + pic)
			}
		}
	};
</script>

<style scoped lang='scss'>
@import './src/main.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
