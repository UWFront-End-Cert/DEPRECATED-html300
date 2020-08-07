<template>
  <div id="app">
    <!--add nav bar here-->
    <img src="./assets/logo.png">
    <router-link to="home">Home</router-link>
    <router-link to="images">Images</router-link>
    <router-link to="grid">Grid</router-link>
    <router-link to="accordion">Accordion</router-link>
    <router-view/>
    <!--footer here to appear on every page-->
  </div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello'
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
