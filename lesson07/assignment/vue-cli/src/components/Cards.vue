<template>
  <div class="cards">
  <h2 class='flipper'> Belize </h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>


  </div>
</template>





<script>
export default {
  name: 'Cards',
  props: {
    msg: String
  }
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import './src/main.scss';
.flipper {
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

</style>
