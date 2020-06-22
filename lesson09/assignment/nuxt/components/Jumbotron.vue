<template>
<div class="jumbo">
    <b-jumbotron>
        <!--<b-container>-->
      <h1>Nichole's Travel Site</h1>
            <!--   <p> This assignment is to showcase skills using Vue </p>
      </b-container>-->
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

  background-image: url('https://live.staticflickr.com/8733/16981980398_6b9ee119c4_b.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
h1{
  display:block;
  color: white;
}
p{
  display:block;
  color: white;
  font-size:2em;
}
</style>
