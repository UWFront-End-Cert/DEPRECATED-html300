<template>
  <div role="tablist" >
    <div v-for="(bloginfo,index) in blogdetails">
        <b-card >
          <b-card-header header-tag="header"  role="tab">
            <b-button block href="#" v-b-toggle = "bloginfo.id" variant="info">{{bloginfo.title}} </b-button>
          </b-card-header>
          <b-collapse :id = "bloginfo.id" accordion="my-blog" role="tabpanel">
            <b-card-body>
              <b-img v-if = "index === 0" :src="require('../assets/bkground1.jpg')" alt=""   height = "200" width = "200" left></b-img>
              <b-img v-if = "index === 1" :src="require('../assets/recipe-5.jpg')" alt=""  height = "200" width = "200" left></b-img>
              <b-img v-if = "index === 2" :src="require('../assets/bkground6.jpg')" alt=""  height = "200" width = "200" left></b-img>
              <b-card-text right>{{bloginfo.text}}</b-card-text>
              <b-card-text right>{{bloginfo.text}}</b-card-text>
              <b-card-text right>{{bloginfo.text}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogdetails:[
        {
          id : "blog1",
          image : "../assets/recipe1.jpg",
          text :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          title : "USE OF SPICES IN OUR FOODS",
        },{
           id : "blog2",
           image : "",
           text :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
           title : " BALANCE MEAL",
         },{
            id : "blog3",
            image : "",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            title : "HOW TO KEEP FRESH FOOD",
         }
      ]
      }
    }
  }
</script>
