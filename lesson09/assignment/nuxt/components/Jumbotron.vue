<template>
<div class="jumbo">
    <b-jumbotron>
        <!--<b-container>-->
            <h1>Travel Ideas</h1>
            <p> This assignment is to showcase skills using Vue </p>
      <!--  </b-container>-->
    </b-jumbotron>
</div>
</template>

<script>
	export default {
		name: 'Jumbotron'
	}
</script>

<style scoped lang='scss'>
@import './main.scss';
.jumbotron {
	padding: 2rem;
  height: auto;//8rem;
	text-align: center;
}
h1{
  display:block;
}
p{
  display:block;
}
</style>
