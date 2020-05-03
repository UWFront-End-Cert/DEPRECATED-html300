<template>
<div id="app">
 <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="light">
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
       <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
             <b-nav-item  to="/" >Home</b-nav-item>
             <b-nav-item  to="/about">About Us</b-nav-item>
             <b-nav-item  to="/trips">Trips</b-nav-item>
             <b-nav-item  to="/travel-photos">Travel Photos</b-nav-item>
          </b-navbar-nav>
       </b-collapse>
    </b-navbar>
 </div>
 <div id="bod">
 <router-view/>
 </div>
</div>

<!--https://www.vuemastery.com/courses/next-level-vue/mixins/-->


</template>



<style lang='scss'>
@import './src/main.scss';
#nav a {
	color: $lighten-black;
	display: block;
	padding: .5em;
	margin: .5em;
	text-decoration: none;
	text-align: center;
	cursor: pointer;}
#nav a:hover,#nav a:focus  {
		text-decoration: underline;
    color: $darken-blue;
	}
#nav a.router-link-exact-active {
  color: $black;
  font-weight:bold;
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
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#bod{
padding:1rem;
}
</style>
