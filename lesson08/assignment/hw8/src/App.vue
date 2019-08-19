<template>
  <div id="app">
    <div class="container">
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
     <div class="menu">
      Type in what you are looking for.<br> e.g. Chicken <input v-model="filterFood"> 
       <ul><li v-for="(food, index) in filterMenu" v-bind:key="index"> {{ food }} </li></ul>
     </div>
      <div  v-if="imgList"> 
              <!-- whatever bind to the v-bind is the info passing to the child component -->
        <app-home v-for="img in imgList"  v-bind:title="pageTitle" v-bind:imgData="img" v-bind:key="img.id">
        </app-home>
      </div>
    </div>
  </div>
</template>

<script>
  //import header then export it
import Header from './components/header.vue';
import Quote from './components/Quote.vue';
import Home from './components/home.vue';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-quote': Quote,
    'app-home': Home
  },
  data(){
    return {
      pageTitle:  'my favourite food #',
      quoteTitle: ' We are located at University Village ',
      quoteContent: ' 1234 Wonderful Land St. Seattle Wa 98111 ',
      menu: ['Apple Fried Rice','Beef Fried Rice','Pork Fried','Chicken Mushroom','Mango Beef','Deep Fried Prawn','Steam Crab'],
      imgList: [{id:1, img: "General Tso Chicken", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-1.jpg"},
                {id:2, img: "Beef Fried Rice", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-2.jpg"},
                {id:3, img: "Pork Dumpling", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-3.jpg"}
      ],
      filterFood:''
    }
  },
  computed:{
    filterMenu(){
      return this.menu.filter((e)=>{
        return e.match(this.filterFood);
      });
    }
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
.menu {
  text-align: left;
}

</style>
