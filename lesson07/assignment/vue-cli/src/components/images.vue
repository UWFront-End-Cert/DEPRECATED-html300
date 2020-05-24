<template>
  <main>
  <!-- Carousel -->
    <h1>Beautiful Places</h1>
    <img src="../assets/pic-1.jpg" alt="..." class="float-right">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <!-- Popover-->
    <p>
      <b-button class="btn-success" v-b-popover.hover.top="'This is a best place for vacation'" title="Adventure">Did you know?</b-button>
    </p>
    <!-- image cards -->
    <div class="card-columns">
      <div v-for="card in cards" class="card bg-light text-white">
        <img :src="card.src" :alt="alt.src" class="card-img">
        <div class="card-img-overlay">
          <h5 class="card-title">{{card.title}}</h5>
          <p class="card-text">{{card.caption}}</p>
        </div>
      </div>
    </div>
  <!-- Carousel -->
  </main>
</template>

<script>
const image1 = require('../assets/pic-1.jpg');
const image2 = require('../assets/pic-2.jpg');
const image3 = require('../assets/pic-3.jpg');
export default {
  data () {
    return {
    cards: [{
      id: 1,
      src: image1,
      alt: 'scenery1',
      title: 'one of my favourite places',
      caption: 'Epic!'
    },
    {
      id: 2,
      src: image2,
      alt: 'scenery2',
      title: 'favourite place 2',
      caption: 'Awesome'
    },
    {
      id: 3;
      src: image3,
      alt: 'scenery3',
      title: '3rd favourite palce',
      caption : 'Amazing'
    }
    ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
