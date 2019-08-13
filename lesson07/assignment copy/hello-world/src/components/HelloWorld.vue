<template>
  <!-- responsive navigation -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="html/accordion.html">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Recipes</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="html/images.html">Noms</a>
              <a class="dropdown-item" href="html/grid.html">Sippin's</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Submit a
                Recipe
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <h1 class="display-2 text-sm-center text-lg-right">{{heroText}}</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div v-for="item of carousel" :key="item.alt" class="carousel-item active">
            <img class="carousel-item__img d-block w-100" :src="item.image" :alt="item.alt" />
            <div class="carousel-caption item.position" id="dark-theme">
              <h1 class="h1-responsive">{{item.title}}</h1>
              <p>{{item.subTitle}}</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- jumbotron -->
      <div class="jumbotron">
        <h1 class="display-4">{{jumbotron.title}}</h1>
        <p class="lead"></p>
        <hr class="my-4" />
        <p>{{jumbotron.description}}</p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="#"
            role="button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Click to go to submission page"
          >{{jumbotron.button}}</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    title: "Lesson07",
    heroText: "Hangry Bitch.!",
    carousel: [
      {
        image: "../assets/carousel/cutlery.jpg",
        alt: "silhouette of spoon and fork in flour",
        title: "",
        subTitle: "",
        position: "",
        color: ""
      },
      {
        image: "../assets/carousel/cuttingboard.jpg",
        alt: "cuttingboard with pad thai, green onion, and lime",
        title: "Noms",
        subTitle: "Good For the Soul",
        position: "text-left",
        color: "black"
      },
      {
        image: "../assets/carousel/drink.jpg",
        alt: "Apple cinnamon whiskey sour",
        title: "Sippin&#39;s",
        subTitle: "Good For the Soul",
        position: "text-right",
        color: "white"
      }
    ],
    jumbotron: {
      title: "Get Featured on Hangry Bitch!",
      description:
        "Have a delicious creation you'd like to share? Submit your recipe and a picture using the button below and we'll feature your concotion on our site!",
      button: "Submit My Recipe"
    }
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
