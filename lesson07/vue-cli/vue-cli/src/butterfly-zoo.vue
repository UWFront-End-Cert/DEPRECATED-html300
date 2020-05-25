<template>
  <!--this is the image page/museum page - page number 2-->
  <div id="app">
<body :style={'background-image':'url(https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}>
      <div style="url('https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');" class="zoo-size zoo-cover">
    <header id="header-color">
      <h1>Welcome to The World of Butterflies</h1>
      <h2>Your sources for all things buttery that fly</h2>

<mbd-navbar color="#eb34e5">
  <mdb-navbar-brand href="https://mdbootstrap.com/">
Our Menu
<img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
</mdb-navbar-brand>
<mdb-navbar-toggler>
<mdb-navbar-nav>
<mdb-nav-item href="App.vue" active>Home</mdb-nav-item>
<mdb-nav-item href="butterfly-blog.vue">Butterfly Blog</mdb-nav-item>
<mdb-nav-item href="butterfly-faq.vue">Butterfly FAQs</mdb-nav-item>
</mdb-navbar-nav>
</mdb-navbar-toggler>
</mdb-navbar>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="the Bombay Blue Beret" src="https://images.unsplash.com/photo-1576031450181-9fcab802bb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80" alt="blue butterfly on leaf">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="the Tree Cleaver" src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="dark orange butterfly on pink flower">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="Big Bird" src="https://images.unsplash.com/photo-1547990338-943dc0c27796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="yellow butterfly with blue tail">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="Tequila Sunrise" src="https://images.unsplash.com/photo-1538860263234-d5e8282d1ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="black butterfly with bright orange highlights in sunny tree">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="Bettie Davis's Eyes" src="https://images.unsplash.com/photo-1564293299687-d861e0144b97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="red butterfly with blue highlights on a yellow flower">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="the Monarch" src="https://images.unsplash.com/photo-1534198634523-ac9ebf960e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="orange monarch butterfly on a pink daisy">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="Flutterbyes" src="https://images.unsplash.com/photo-1531062499906-c6dc9747ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="green butterflies walk around table of ornately carved oranges">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-toggle="tooltip" data-placement="right" title="the Desert Nymph" src="https://images.unsplash.com/photo-1580448458187-c9d2c7971317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="black butterfly with red tale on brown rocks">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</body>
</template>
</div>

<script>
export default {
  name: 'app',
  data () {
    return {
  }
}
}
$('.carousel').carousel({
  interval: 2000
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
body {
  background-color: #b8d4fc;
}
header {
  background-color: #08fc3d;
  color: white;
}
.menu {
  background-color: #ce1dde;
  margin: 2px;
  display: flex;
  justify-content: space-around;
}
</style>
