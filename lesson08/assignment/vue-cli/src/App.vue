<template>
  <div id="app">

    <!-- Creat app-header component to serve as universal header for site -->
    <app-header></app-header>

    <!-- Router links to other apps or "pages" -->
    <router-link to="/">Home</router-link>
    <router-link to="/images">Images</router-link>
    <router-link to="/accordion">Accordion</router-link>
    <router-link to="/grid">Grid</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
