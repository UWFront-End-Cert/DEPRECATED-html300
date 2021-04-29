<template>
  <div id="app">
    <!--add nav bar here-->
    <img src="./assets/logo.png">


    <nav class="navbar navbar-expand-lg bg-dark m-3">
      <ul class="list-inline">
        <li class="list-inline-item"><router-link to="home" class="nav-item text-success">Home</router-link></li>
        <li class="list-inline-item"><router-link to="images" class="nav-item text-danger">Images</router-link></li>
        <li class="list-inline-item"><router-link to="accordion" class="nav-item text-warning">Accordion</router-link></li>
      </ul>
    </nav>
    <!--this causes the insersion of router content-->
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
