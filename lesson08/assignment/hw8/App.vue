<template>
  <div id="app">
      <app-header></app-header>
     <router-view></router-view>
    <!-- default html   
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
//import header then export it
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    //  HelloWorld
    'app-header': Header
  }
}
</script>

<style>
 #app {
   margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black ;
  background: plum;
  margin-top: 60px;
}

</style>
