<template>
  <div id="app">
  <!-- App.vue -->
  <!-- Main navigation -->
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
<!-- Logo and hamburger menu -->
<a class="navbar-brand mb-0 h1" href="index.html">My company</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
</button>
    <!-- Nav items and dropdowns aligning to right -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cat lovers</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item disabled" href="#">Action 1</a>
          <a class="dropdown-item disabled" href="#">Action 2</a>
          <a class="dropdown-item disabled" href="#">Action 3</a>
          <a class="dropdown-item disabled" href="#">Get certificate</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item disabled" href="#">Cat Guide</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dog lovers</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item disabled" href="#">Action 1</a>
          <a class="dropdown-item disabled" href="#">Action 2</a>
          <a class="dropdown-item disabled" href="#">Action 3</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item disabled" href="#">Dog Guide</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bird lovers</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item disabled" href="#">Action 1</a>
          <a class="dropdown-item disabled" href="#">Action 2</a>
          <a class="dropdown-item disabled" href="#">Action 3</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item disabled" href="#">Bird Guide</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rabbit lovers</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item disabled" href="#">Action 1</a>
          <a class="dropdown-item disabled" href="#">Action 2</a>
          <a class="dropdown-item disabled" href="#">Action 3</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item disabled" href="#">Rabbit Guide</a>
        </div>
      </li>
    </ul>
    </div>
    </nav>

    <!-- Secondary navigation -->
<div class="row">
  <div class="col-sm-2">
  <ul class="nav flex-sm-column">
    <li class="nav-item">
      <router-link to="/images" class="nav-link">Images</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/accordion" class="nav-link">Accordion</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/grid" class="nav-link">Grid system</router-link>
    </li>
  </ul>
</div>

<!-- Main content -->
<div class="col-sm-10">
<router-view/>
</div>
</div>

<!-- Footer -->
<footer>
<div class="mew-footer">
<p>Footer info. In id libero purus. Fusce id congue magna, id feugiat velit. Ut feugiat tincidunt pretium.</p>
</div>
</footer>
<!-- App.vue -->
</div>
</template>

<script>
import Helloworld from '/components/Helloworld.vue';
import Images from '/components/images.vue';
import Grid from '/components/grid.vue';
import Accordian from '/components/Accordian.vue';
export default{
name: 'App',
data(){
return{
      msg:'Welcome to your vue.js app'
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
.container {
  width: 95%;
  margin: 1rem;
  padding: 1rem;
  }
.jumbotron {
  padding: 1rem 0;
  }
html {
    box-sizing: border-box;
}
*,
*:after,
*:before {
    box-sizing: inherit;
}
main {
padding: 2rem;
}
.col-sm-2 {
padding: 2rem 0rem 0rem 2rem;
}
.float-right {
  margin: 0.5rem 0rem 1rem 1rem;
}
.img-fluid {
  margin-bottom: 1rem;
  width: 100%;
}
.mew-footer {
  width: 100%;
  height: auto;
  background-color: #343a40;
  color: #fff;
  padding: 2rem 2rem 1rem;
  margin-top: 1rem;
  text-align: center;
}
</style>
