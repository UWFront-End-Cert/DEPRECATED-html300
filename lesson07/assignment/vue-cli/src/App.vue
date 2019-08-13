<template>
  <div id="app">
    
    <nav_bar></nav_bar>
    <main class="main">
<!--grid with two main areas for an eventual map and a listing of recent trip reports-->
            <div class="row">
                <div class="col-12 col-md-8">Insert Map of Trip Reports</div>
<!--tooltip for asking user to input trip report-->
                <div class="col-6 col-md-4"><a href="#" data-toggle="tooltip" title="Click to Enter A New Report">Latest Trip Reports</a></div>
            </div>
    </main>
  </div>
</template>



<script>
import nav_bar from "./components/nav_bar.vue";

export default {
  name: 'app',
  components: {
    nav_bar
  }
}



</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
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
