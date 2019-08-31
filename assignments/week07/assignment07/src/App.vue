<template>
  <div id="app">
          <header>
          <h1>Assignment Seven</h1>
          <h2>Vue</h2>
        </header>
        <!-- Navigation Bar  -->
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
          <i class="fab fa-html5 fa-3x navbar-brand"></i>
          <i class="fab fa-vuejs fa-3x navbar-brand"></i>
          <i class="fab fa-css3 fa-3x navbar-brand"></i>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-pills">
              <li class="nav-item active">
                <router-link class="nav-link" to="/index">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/image">Images</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/grid">Grid</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/accordian">Accordian</router-link>
              </li>
            </ul>
          </div>
        </nav>
  <div>
<router-view />
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
html {
    box-sizing: border-box;
}

*,
*:after,
*:before {
    box-sizing: inherit;
}

.main {
    padding: 2rem;
}

body {
    background-color: lightgray;
}

header {
    background-color: wheat;
    margin-bottom: 0;
}

h1, h2 {
    text-align: center;
    margin-bottom: 0;
}

h2 {
    padding-bottom: .5em;
}

ul li {
    display: inline;
}

.col-2 {
   text-align: right;
}

.container {
    padding: 2% 0;
    background-color: wheat;
    font-weight: bold;

}

.container1 {
    padding: 2%;
    font-weight: bold;
}

#result {
    text-align:center;
    display: none;
}

.navbar-nav {
    font-size: 1.25em;
}

#button-div {
    text-align:center;
}

.col {
    border: 2px solid black;
    text-align: center;
}

.row {
    margin: 0 auto;
}

.card {
    text-align: center;
}

</style>
