<template>
  <!--this is the faq page - page number 4-->
  <div id="app">
    <header class="jumbotron-fluid text-white text-center">

      <h1 class="display-4">Welcome to The World of Butterflies</h1>
      <h1 class="lead">Your sources for all things buttery that fly</h1>
      <nav class="navbar navbar-expand-lg navbar-dark mb-4" style="background-color: #eb34e5;">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
            Our Menu</a>
        <button class="navbar-toggler" data-toggle="collapse"data-target="#butterfly-menu"><span class="navbar-toggler-icon"><i class="fas fa-bars fa-1x"></i></span></button>
        <div id="butterfly-menu" class="collapse navbar-collapse">

        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="butterfly-zoo.vue"> Butterfly Museum </a></li>
          <li class="nav-item"><a class="nav-link" href="butterfly-blog.html">Butterfly Blog </a></li>
          <li class="nav-item"><a class="nav-link" href="butterfly-faq.html">Butterfly FAQs </a></li>
        </ul>
      </div>
      </div>
      </nav>

    </header>
<!--my special spiffy FAQ accordian to make sweet, sweet question answering music-->
<div id="accordion">
<!--question number 1-->
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Is Butterfly Ownership for me?
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        It depends if you like having your flowers pollinated, your nose tickled and your senses delighted. And you can handle the racous partying.
      </div>
    </div>
  </div>
<!--questions number 2-->
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          What Makes Butterflies so Magical?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      That's something for the philosophers to answer. We are but a humble website.
      </div>
    </div>
  </div>
<!--question number 3-->
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Where Can I Get More Butterfly Action?
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        At the Butterfly Pavillion. Take a left at Narnia, a right onto 1234 Mockingbird Lane and go straight through Oz and you should be there in no time. (Or you can go to part of your zoo that has them.)
      </div>
    </div>
  </div>
<!--question number 4-->
  <div class="card">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        Should I donate to your site?
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordion">
      <div class="card-body">
      Yes. Yes, you should.
      </div>
    </div>
  </div>

</div>

</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
  }
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
  padding-top: 50px;
}
.menu {
  background-color: #ce1dde;
  margin: 2px;
  display: flex;
  justify-content: space-around;
}
</style>
