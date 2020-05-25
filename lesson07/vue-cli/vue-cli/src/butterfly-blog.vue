<template>
  <!--this is the blog page - page number 3-->
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

<div class="container">

     <section class="row m-2">
          <img data-toggle="tooltip" data-placement="right" title="Our Butterfly of the month: the Green-Eyed Warbler"src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="brown butterfly orange flower" class="col-xl-6 col-lg-4 col-sm-8 col-12 img-fluid" style="width: 200px; height: auto;">
          <div class="col-xl-6 col-lg-8 col-sm-4 col-12">
           <h1 class="text-capitalize">care and feeding of your butterfly</h1>
           <p>Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
           the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.</p>
        </div>
      </section>

      <section class="row m-2">
           <img data-toggle="tooltip" data-placement="right" title="Our Butterfly of the month: the Green-Eyed Warbler"src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="brown butterfly orange flower" class="col-xl-6 col-lg-4 col-sm-8 col-12 img-fluid" style="width: 200px; height: auto;">
           <div class="col-xl-6 col-lg-8 col-sm-4 col-12">
            <h1 class="text-capitalize">rare butterflies to look out for</h1>
            <p>Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
            the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.</p>
         </div>
       </section>

       <section class="row m-2">
            <img data-toggle="tooltip" data-placement="right" title="Our Butterfly of the month: the Green-Eyed Warbler"src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="brown butterfly orange flower" class="col-xl-6 col-lg-4 col-sm-8 col-12 img-fluid" style="width: 200px; height: auto;">
            <div class="col-xl-6 col-lg-8 col-sm-4 col-12">
             <h1 class="text-capitalize">the curious nature of the monarch</h1>
             <p>Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
             the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.</p>
          </div>
        </section>

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
  padding-top: 50px;
}
.menu {
  background-color: #ce1dde;
  margin: 2px;
  display: flex;
  justify-content: space-around;
}
</style>
