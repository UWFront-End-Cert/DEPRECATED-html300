<template>
  <div class="cards">
  <h2 class='flipper'> Belize </h2>
    <font-awesome-icon icon="heart" />

  </div>
</template>

<!--https://books.google.com/books?id=ovNFDwAAQBAJ&pg=PA275&lpg=PA275&dq=fa-heart-o+vue&source=bl&ots=2aePImIGFS&sig=ACfU3U2CgGr_WXW5f8yz6jHFtlxyq8g2TQ&hl=en&sa=X&ved=2ahUKEwjWgO2HwIzpAhVPcq0KHTV9Ak0Q6AEwA3oECAkQAQ#v=onepage&q=fa-heart-o%20vue&f=false-->
<!--https://github.com/kaluznyt/vuebnb/blob/master/ClientApp/components/ListingSave.vue-->
<!--https://codepen.io/whoacowboy/pen/vXOwgO-->
<!--https://codepen.io/chillco/pen/BaaXYBO-->
<!--https://blog.logrocket.com/full-guide-to-using-font-awesome-icons-in-vue-js-apps-5574c74d9b2d/-->




<!--https://forum.vuejs.org/t/simple-clarification-of-when-using-key-with-v-for-is-appropriate-and-why/28966/5 -->
<!--https://www.vuemastery.com/courses/next-level-vue/mixins/-->
<!--https://stackoverflow.com/questions/56004640/cannot-display-images-in-vuejs -->
<!--https://top10webjs.com/2019/05/07/vue-js-cannot-display-images-in-vuejs/ -->

<script>

export default {

  name: 'Cards'}
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


svg > path{

color:$red;
opacity:.5;
padding: .5rem;
margin: .5rem;
animation: $a-heart;

&:hover{
transform: scale(1.7);
animation: NULL;
cursor: pointer;
opacity:1;
}
}

</style>
