<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-on:input="changeTitle">
    <a v-bind:href="link" target="_blank">google</a>
    <button type="button" name="button" v-on:click = "countUp">Click Me</button>
    <p>{{counter}}</p>
    <div class="demo" v-on:click="attachRed = !attachRed" v-bind:class="{red:attachRed}">

    </div>
    <p v-if="show">Can you see me</p>
    <button v-on:click="show = !show" type="button" name="button">Toggle</button>
    <ul>
      <li v-for="ingredient in ingredientList">{{ingredient}}</li>
    </ul>
    <ul>
      <li v-for="person in personList">{{person.name}} {{person.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  //data here
  data () {
    return {
      msg: 'Some other message',
      link: 'https://www.google.com/',
      counter: 0,
      attachRed: false,
      show: true,
      ingredientList: ['garlic', 'onion', 'tomato'],
      personList: [{name:'Ryan', age:'38', color:'Green'}, {name:'Lynda', age:'37', color:'Red'}]
    }
  },
  //Methods Here
  methods: {
    changeTitle: function(event) {
      this.msg = event.target.value;
    },
    countUp: function(){
      this.counter++;
    }
  }
  //end methods
}
</script>

<style>
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

.demo {
  height: 100px;
  width: 100px;
  background-color: green;
}

.red{
  background-color: red;
}
</style>
