<!-- Copyright 2020 Markus Schiffer -->
<!-- Bootstrap Jumbotron for Landing page. -->

<template>
    <!-- Uses a Bootstrap jumbotron to display a welcome message. -->
    <div class="container mt-5">
        <div class="jumbotron" @mouseover="showMessage = true" @mouseout="showMessage = false">
            <h1 class="text-primary">Welcome to the landing page!</h1>      
            <p class="text-primary">This is a jumbotron. It's pretty fancy.</p>
            <p class="text-secondary" v-if="showMessage">Hey look, your mouse is here!</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          showMessage: false
      }
  },
  name: 'Jumbotron'
}
</script>

<style scoped>
    p.text-primary {
        font-style: italic;
    }
</style>