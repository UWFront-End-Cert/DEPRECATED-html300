<template>
  <!--this is the faq page - page number 4-->
  <div id="app">
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
            <router-link :to="/butterfly-zoo">Butterfly Museum</router-link>
            <router-link :to="/butterfly-blog">Butterfly Blog</router-link>
          </p>
         </div>
        </header>

    </header>
<!--my special spiffy FAQ accordian to make sweet, sweet question answering music-->
<!--this will connect to my components pages for the accordion-->
<h1>Accordion</h1>
    <Accordion/>
</template>

<h2>Join our club!</h2>
	<p>You can join by either entering your email or your phone number.</p>
<slot>

<div id="join" class="demo">
  <div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your phone number" key="userphone-input">
    </template>
    <template v-else="">
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
  </div>
  <button @click="toggleLoginType">Pick your info</button>
</div>
<br>
	<p>enter your name here</p>

	<slot>
		<label>Who are you </label>
  <input placeholder="Enter your info here">
</slot>

	<div id="newFriend">
	<button v-on:click="welcome">submit</button>
	</div>
	</div>

</div>

<script>
//This will connect my faq page with the accodion component - which will then connect to the baseAccordian component.
import accordion from "./components/accordion";

export default {
  name: 'app',
  components: {
    accordion
  }
};


new Vue({
  el: '#join',
  data: {
    loginType: 'userphone'
  },
  methods: {
    toggleLoginType: function () {
      return this.loginType = this.loginType === 'userphone' ? 'email' : 'userphone'
    }
  }
})


var newFriend = new Vue({
  el: '#newFriend',
  data: {
    name: 'Friend'
  },
  methods: {
    greet: function (event) {
          alert('welcome ' + this.name + '!')
          if (event) {
        alert(event.target.tagName)
      }
    }
  }
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

button {
  width: 160px;
  height: 42px;
  font-size: 20px;
  background: pink;
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
}

button.active {
background: aqua;
}

</style>
