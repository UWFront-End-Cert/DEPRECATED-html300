<template>
  <div id="app">
    <div class="container">
      <!-- <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> -->
    <app-header></app-header>
        <app-quote>
          <h2 slot="title"> {{ quoteTitle | toUpper}}  </h2>   
          <P slot="content"> {{ quoteContent | toLower}}</P>
          <p>Call us at (206)123-4567</p>
    </app-quote>
    <router-view></router-view>
    <!-- default html   
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
//import header then export it
import Header from './components/header.vue';
import Quote from './components/Quote.vue';

export default {
  name: 'app',
  data(){
    return {
      quoteTitle: ' We are located at University Village ',
      quoteContent: ' 1234 Wonderful Land St. Seattle Wa 98111 '
    }
  },
  // local filter, global filter is defined in main.js
  filters:{
    toUpper(v){
      return v.toUpperCase();
    }
  },
  components: {
    //  HelloWorld
    'app-header': Header,
    'app-quote': Quote
  }
}
</script>

<style>
 #app {
   margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black ;
  background: plum;
  margin-top: 60px;
}

</style>
