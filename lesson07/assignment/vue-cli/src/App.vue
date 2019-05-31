<template>
<div id="app">
  <!-- Header and navigation -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" v-bind:href="linkHome">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" v-bind:href="linkImage">Image</a>
          <a class="nav-item nav-link" v-bind:href="linkAccordion">Accordion</a>
          <a class="nav-item nav-link" v-bind:href="linkGrid">Grid</a>
        </div>
      </div>
    </nav>
  </header>

  <page-header></page-header>

  <router-view></router-view>
  <router-link to="/other">other</router-link>
  <router-link to="/next">next</router-link>
  <router-link to="/">home</router-link>



  <!-- home page jumbotron -->
  <!-- <div class="jumbotron jumbotron-fluid"></div> -->

  <!-- In class 5/23 -->
  <blog-post post-title="This is a blog post"></blog-post>
  <blog-post post-title="This is another heading"></blog-post>
  <blog-post post-title="One more!"></blog-post>

  <div>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>

  <app-header></app-header>


  <!-- <h1>Homepage Heading</h1>
  <button v-on:click="show = !show" type="button" name="button">Click to show</button>
  <p v-if="show">Show this</p> -->

  <!-- Grid for photos -->
  <!-- <h2>Images</h2> -->
  <!-- <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo"> -->

  <!-- Grid for photos w/Bootstrap that doesn't work -->
  <!-- <div class="container">
    <div class="row">
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
      <div class="col-md">
        <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
      </div>
    </div>
  </div> -->

  <!-- Accordion Page -->
  <h2>Accordion</h2>
  <!-- Accordion -->
  <!-- Put accordion in 1x1 Grid to center on page -->
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- begin accordion code -->
        <div id="accordion">
          <!-- Card: North -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button v-for="accordion in accordions" class="btn btn-link" data-toggle="collapse" data-target="#north" aria-expanded="true" aria-controls="north">
                  {{accordion.title}}
                </button>
              </h5>
            </div>
            <!-- Card body -->
            <div id="north" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div v-for="accordion in accordions" class="card-body">
                {{accordion.body}}
              </div>
            </div>
          </div>

          <!-- Card: Central -->
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#central" aria-expanded="false" aria-controls="central">
                </button>
              </h5>
            </div>
            <div id="central" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
              </div>
            </div>
          </div>

          <!-- Card: South -->
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#south" aria-expanded="false" aria-controls="south">
                </button>
              </h5>
            </div>
            <div id="south" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
              </div>
            </div>
          </div>
        </div>
        <!-- end accordion -->
      </div>
    </div>
  </div>

  <!-- Footer created for in-class activity 5/23 -->
  <footer>
    <h3>This is the footer</h3>
    <ul>
      <li>Text here</li>
      <li>Text here</li>
      <li>Text here</li>
      <li>Text here</li>
    </ul>
  </footer>

</div>
</template>

<script>
// Page data
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      // Navigation Links
      linkHome: './index.html',
      linkImage: './image.html',
      linkAccordion: './accordion.html',
      linkGrid: './grid.html',
      // Create object for image page
      photos: [{
          url: 'http://lorempixel.com/400/300/city/1',
          alt: 'responsive image'
        },
        {
          url: 'http://lorempixel.com/400/300/city/2',
          alt: 'responsive image'
        },
        {
          url: 'http://lorempixel.com/400/300/city/3',
          alt: 'responsive image'
        },
        {
          url: 'http://lorempixel.com/400/300/city/4',
          alt: 'responsive image'
        },
        {
          url: 'http://lorempixel.com/400/300/city/5',
          alt: 'responsive image'
        },
        {
          url: 'http://lorempixel.com/400/300/city/6',
          alt: 'responsive image'
        }
      ],

      // Create object for accordion cards
      accordions: [{
        title: 'North',
        body: 'North - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        title: 'Central',
        body: 'Central - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        title: 'South',
        body: 'South - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }],

      // Use show to toggle element view when button clicked
      show: false
    }
  }
}
</script>

<style>
.jumbotron {
  background-image: url(assets/seattle-map.png);
  background-size: cover;
  opacity: 0.8;
  height: 30vh;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
}

h1,
h2 {
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

footer {
  height: 20vh;
  background-color: lightblue;
  margin-top: 40px;
}
</style>
