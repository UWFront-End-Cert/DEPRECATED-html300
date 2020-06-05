<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/image">Image</router-link>
      <router-link to="/gridsystem">Gridsystem</router-link>
      <router-link to="/accordion">Accordion</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 0.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
</style>
