<!--https://codepen.io/chillco/pen/BaaXYBO-->

  <template>
  <div id="app">
  <h2 class='flipper'> Belize </h2>
   <eva-icon name="heart-outline"></eva-icon>
   <eva-icon name="heart"></eva-icon>
  </div>
</template>

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

i {
vertical-align: top;
	transform: scale(.1);
	padding: .5em;
	fill: $red;
	cursor: pointer;
  opacity:.5;
  //animation: $a-heart;
  display: inline;
  }

span:hover {
  color: green;
}

</style>
