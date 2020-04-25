<template>
   <div id="app">
      <div id="nav">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/trips">Trips</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link to="/travel-photos">Travel Photos</router-link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
      <router-view/>
   </div>
</template>











<style lang="scss">
@import '../src/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

ul {
	display: inline-block;
	list-style-type: none;
	vertical-align: text-top;
	text-align: left;
}

li {
	text-align: left;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  //color: #0000CC;
  color:$pink;
}

#nav a.router-link-exact-active {
  color: #CCE6FF;
}

</style>
