<template>
  <section class="container">
<!--faq Page for the World of Butterflies - page 4-->

<!--header stuff this slot will insert the Butterfly Header component text-->
<!--<div class="header">
 <slot name="butterfly-header"></slot>
</div>-->


 <!--nav bar-->
  <div class="nav" style="background-color: #eb34e5;">
    <img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
    <h3>Our Menu</h3>
      <!--<nuxt-link to="/butterfly-zoo" class="butterlinks">Butterfly Museum</nuxt-link>
      <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
       <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>-->
    </div>

    <!--my special spiffy FAQ accordian to make sweet, sweet question answering music-->
    <!--this will connect to my components pages for the accordion-->
    <h1>Frequently Asked Questions</h1>
      <Accordion/>

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


  </section>
  </template>

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

  <style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #b8d4fc;
  }

  .header {
    display: block;
    width: 100%;
    padding: 3%;
    background-color: 08fc3d;
    color: white;
  }

  .nav {
    background-color: #eb34e5;
    width: 100%;
    padding: 2%;
    color: white;
    }

  .butterlinks {
    color: white;
    text-decoration: none;
    padding: 2%;
  }

  .links {
    padding-top: 15px;
  }

  </style>
