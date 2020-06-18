<template>
  <div id="app">
      <div id="nav">
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <nuxt-link class="nav-item" to="/home">Home</nuxt-link>
              <nuxt-link class="nav-item" to="/about">About Us</nuxt-link>
              <nuxt-link class="nav-item" to="/trips">Trips</nuxt-link>
              <nuxt-link class="nav-item" to="/travelphotos">Travel Photos</nuxt-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div id="bod">
        <nuxt />
      </div>
  </div>
</template>

<style lang='scss'>
@import './main.scss';
#nav a {
    color: $lighten-black;
    display: block;
    padding: 0.5em;
    margin: 0.5em;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
}
#nav a:focus,
#nav a:hover {
    text-decoration: underline;
    color: $darken-blue;
}
#nav a.router-link-exact-active {
    color: $black;
    font-weight: bold;
}
ul {
    display: inline-block;
    list-style-type: none;
    vertical-align: text-top;
    text-align: left;
}
ul[data-title]::before {
    content: attr(data-title);
    text-decoration: underline;
    font-weight: bold;
}
li {
    text-align: left;
}
#nav {
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#bod {
    padding: 1rem;
}
</style>
