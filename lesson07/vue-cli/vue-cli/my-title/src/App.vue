<template>
  <div id="app">
    <router-view/>
    <!--header stuff-->
  <header class="jumbotron-fluid text-white text-center">
      <h1 class="display-4">Welcome to The World of Butterflies</h1>
      <h1 class="lead">Your sources for all things buttery that fly</h1>
  <!--and inside the header is the nav bar/router links-->
     <div class="nav" style="background-color: #eb34e5;">
       <a class="navbar-brand" href="#">
         <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
         Our Menu</a>
       <p>
      <!--  <router-link :to="/butterfly-zoo">Butterfly Museum</router-link>
        <router-link :to="/butterfly-blog">Butterfly Blog</router-link>
        <router-link :to="/butterfly-faq">Butterfly FAQs</router-link>-->
      </p>
     </div>
   </header>

      <main class="main text-center">
      <div class="container">
      <div class="row" >
        <!--This is the intro text for the main page, make the user feel welcome. Also there is an astrisk which is a button to give a disclaimer popover to say that this isn't actually a quote.-->
      <h1 class="display-5 text-primary align-text-top">"Let decadence be your guide" - Oscar Wilde</h1>
          <button type="button" class="btn btn-lg btn-outline-primary" data-toggle="popover" title="Disclaimer" data-content="Something Oscar Wilde would have said.">*</button>
      <!--I just added this to experiment with tooltips and button functions-->
      <div id="meToo">
          <button type="button" v-on:click="say('Me too!')" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="click here if you love butterflies.">
            Joy!
          </button>
       </div>
      </div>
      </div>
      <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1465505041184-f383907cc134?ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" width="50%" alt="a white butterfly sits on a purple flower">

      </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}

new Vue({
  el: '#meToo',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
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
