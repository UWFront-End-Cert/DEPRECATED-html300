<template>
  <div class="main" id="app">
  <!-- App.vue -->
  <div v-for="feature in features" class="jumbotron jumbotron-fluid">
    <div class="container">
      <img :src="feature.image" class="img-fluid" :alt="feature.alt">
      <h1 class="display-4">{{feature.title}}</h1>
      <p class="lead">{{feature.intro}}</p>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  </div>
  <!-- App.vue -->
  </div>
</template>

<script>
const image1 = require('../assets/cover.jpg');
const image2 = require('../assets/cover2.jpg');
export default {
  name: 'app',
  data () {
    return {
      features: [
      {title: 'Feature topic 1', intro:'Feature topic content goes here', image: image1,alt:''},
      {title: 'Feature topic 2', intro:'Feature topic content goes here', image: image2,alt:''},
      ]
    }
  }
}
</script>

<style scooped>

</style>
