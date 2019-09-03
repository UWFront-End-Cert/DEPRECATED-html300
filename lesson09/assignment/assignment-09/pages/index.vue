<template>


  <div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">To register click the button below!</p>
    <hr class="my-4">
    <!-- When button is pressed displays text in red -->
    <button class="btn btn-primary btn-lg" v-on:click="show = !show">Register</button>
    <p class="text-danger" v-if="show">We are currently not accepting any new applications. We apologize for the inconvenience</p>
    <section class="weather center" v-if="info">
      <h2 class="heading">{{info.name}}</h2>
      <img class="weatherIcon" v-bind:src="'http://openweathermap.org/img/w/' + info.weather[0].icon + '.png'" :alt="info.weather[0].main">
      <h3>Current weather: {{info.weather[0].description | upCase}}</h3>
      <h3>Current temperature: {{info.main.temp}} C</h3>
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import axios from 'axios'
export default {
  components: {
    Card
  },
  data() {
    return {
      loading: true,
      info: null,
      errored: false,
      show: false,
    }
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=metric&APPID=59909c0d85dbb93cdce4506da7e9fc79')
      .then(response => (this.info = response.data)
      )
  },
  filters: {
    upCase(val) {
      var foo = val.toUpperCase();
      return foo
    }
  }

}
</script>

<style>

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}
.weatherIcon{
  min-width: 100px;
}
.weather{
  max-width: 20rem;
  background-color: lightgray;
  margin: auto;
}
</style>
