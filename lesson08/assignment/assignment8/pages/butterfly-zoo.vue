<template>
    <section class="container">
      <!--this is the image page/museum page - page number 2-->

          <router-view/>
        <body :style={'background-image':'url(https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}>
              <div style="url('https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');" class="zoo-size zoo-cover">
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
                    <router-link :to="/App">Butterfly Home</router-link>
                    <router-link :to="/butterfly-blog">Butterfly Blog</router-link>
                    <router-link :to="/butterfly-faq">Butterfly FAQs</router-link>
                  </p>
                 </div>
                </header>

            <div>
              <carousel />
            </div>

    <div class="">
      <p>Click here for fan art</p>
        <router-link :to="/fanArt">Butterfly Fan Art</router-link>
    </div>

          </body>

  </section>
</template>

<script>
import carousel from "./components/carousel.vue";
export default {
  name: "app",
  components: {
    Slider
  }

components: {
      fanArt
    }
  };

};

</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body {
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
