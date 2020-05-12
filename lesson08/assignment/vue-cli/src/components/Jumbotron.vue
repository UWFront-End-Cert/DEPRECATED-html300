<template>
   <div class="jumbo">
      <b-jumbotron>
         <b-container>
            <h1>Bootstrap Assignment</h1>
            <p> This assignment is to showcase skills using Vue and Bootstrap 4 features </p>
         </b-container>
      </b-jumbotron>
   </div>
</template>

<script>
	export default {
		name: 'Jumbotron'
	}
</script>

<style scoped lang='scss'>
@import './src/main.scss';
.jumbo {
	padding: 2rem;
	text-align: left;
}
</style>
