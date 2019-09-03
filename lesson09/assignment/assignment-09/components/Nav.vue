<template>
  <div>
    <!-- Create and style nav elements from the nav array -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav" v-for="link in nav">
        <nuxt-link :to="{ name: link.name }" class="nav-link">{{link.display}}</nuxt-link>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  //Array of pages to create navigation
  data () {
    return {
      nav: [
        {name: 'index', display: 'Home'},
        {name: 'Teams', display: 'Teams'},
        {name: 'Rules', display: 'Rules'},
        {name: 'Contact', display: 'Contact'}
      ]
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
}
</style>
