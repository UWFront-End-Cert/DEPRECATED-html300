<template>
  <div id="app">
    <b-navbar toggleable="lg" type="success" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-link to="/">Home</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/images">Images</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/accordian">Accordian</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/grid">Grid</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>   
    <router-view/>
  </div>    


</template>

<script>
export default {
  name: "app"
};
</script>



    

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #13e269;
  margin-top: 60px;
}
</style>
