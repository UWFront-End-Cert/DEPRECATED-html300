<template lang="html">
  <div role="tablist" >
    <div v-for="(bloginfo,index) in blogdetails">
        <b-card >
          <b-card-header >
          <h2>{{bloginfo.title}}</h2>
          </b-card-header>
            <b-card-body>
              <b-img :src = "bloginfo.image" alt=""   height = "200" width = "200" left />
              <b-card-text right>{{bloginfo.text}}</b-card-text>
              <b-card-text right>{{bloginfo.text}}</b-card-text>
              <b-card-text right>{{bloginfo.text}}</b-card-text>
            </b-card-body>
          </b-card>
    </div>
  </div>
</template>

<script>

import blog1 from '~/assets/bkground1.jpg'
import blog2 from '~/assets/bkground6.jpg'
import blog3 from '~/assets/bkground5.jpg'
export default {
  data() {
    return {
      blogdetails:[
      {
        id : "blog1",
        image : blog1,
        text :
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        title : "USE OF SPICES IN OUR FOODS",
      },{
         id : "blog2",
         image : blog2,
         text :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         title : " BALANCE MEAL",
       },{
          id : "blog3",
          image : blog3,
          text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          title : "HOW TO KEEP Food FRESH ",
       }
    ]
    }
  }



}
</script>

<style lang="css" scoped>

</style>
