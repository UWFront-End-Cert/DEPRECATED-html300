<template lang="html">
  <div class="">
    <!-- home page jumbotron -->
    <div class="jumbotron jumbotron-fluid"></div>
    <h1>Homepage Heading</h1>
    <h2>{{test}}</h2>
    <button v-on:click="greet">Greet</button>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      test: "Hello",
      loading: true,
      date: null,
      east: null,
      west: null,
      errored: false
    }
  },
  created: function() {
    //http://www.omdbapi.com/?apikey=90fcc7de&t=2018
    axios
      .get(`https://data.seattle.gov/resource/65db-xm6k.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        console.log(this.posts);
      })
      .catch(e => {
        this.errors.push(e)
      })
      .finally(() => this.loading = true)
  },
  methods: {
    greet: function() {
      this.test = "Hello Again";
    }
  }
}
</script>

<style>
.jumbotron {
  background-image: url(../assets/seattle-map.png);
  background-size: cover;
  opacity: 0.8;
  height: 30vh;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
}
</style>
