<template>
  <!-- Jumbotron is a hero unit from bootstrap -->
  <div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">To register click the button below!</p>
    <hr class="my-4">
    <!-- When button is pressed displays text in red -->
    <button class="btn btn-primary btn-lg" v-on:click="show = !show">Register</button>
    <p class="text-danger" v-if="show">We are currently not accepting any new applications. We apologize for the inconvenience</p>
  </div>
</template>

<!-- Sets the text to be hidden when page loads -->
<script>
  export default {
    name: 'Hello',

    data () {
      return {
        show: false,
      }
    },
  }
</script>
