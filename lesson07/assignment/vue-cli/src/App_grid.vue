<template>
  <div id="app_grid">
    <nav_bar/>
    <main class="main">
<!-- Avi info for travellers stacking on small screens -->
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6">Avalanche Hazard Map</div>
                <div class="col-12 col-sm-4 col-md-6">Avalanche Area Forecasts</div>
            </div>

<!-- Weather infof or travellers changing layout to stack on small screens-->
            <div class="row">
                <div class="col-12 col-sm-4 col-md-6">Latest Area Weather Forecasts</div>
                <div class="col-12 col-sm-4 col-md-3">Area Radar</div>
                <div class="col-12 col-sm-4 col-md-3">Telemetry</div>
            </div> 
    </main>
  </div>
</template>

<script>
import nav_bar from "./components/nav_bar.vue";

export default {
  name: 'app_grid',
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
