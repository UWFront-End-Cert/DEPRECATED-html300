<template>
  <!--this is the intro page - page number 1-->

  <div id="app">
   <p>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/butterfly-zoo">Butterfly Zoo</router-link>
    <router-link to="/butterfly-blog">Butterfly Blog</router-link>
    <router-link to="/butterfly-faq">Butterfly FAQ</router-link>
    <router-view></router-view>
   </p>
</script>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
    var app = new Vue({
      el: '#main',

      data: {
        show_tooltip: false,
        text_content: 'me too.'
      },

      methods: {
        hideTooltip: function() {
          this.show_tooltip = false;
        },
        toggleTooltip: function() {
          this.show_tooltip = !this.show_tooltip;
        }
      }
    });



  }



}




  $(function () {
    $('[data-toggle="popover"]').popover()
  })
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
button {
  margin-right: 5px;
}

$background: #f2f1ef;
$text: #00552a;



  </style>
