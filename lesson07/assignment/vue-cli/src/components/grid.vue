<template>
  <div class="main" id="app">
  <!--grid -->
    <div class="row">
      <div class="col-sm-8">
        <div v-for="item in items">
          <h1>{{item.title}}</h1>
        </div>
        <div v-for="image in images">
          <img :src="image.src" :alt="image.alt" class="float-right" />
        </div>
        <div v-for:"item in items">
          <p>{{item.paragraph}}</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div v-for="sidebar in sidebars">
          <h2>{{sidebar.title}}</h2>
          <p><small>{{sidebar.paragraph}}</small></p>
        </div>
        <div v-for="sideimage in sideimages">
          <img :src="sideimage.src" :alt="sideimage.alt" class="img-fluid">
        </div>
      </div>
    </div>
  <!--grid -->
  </div>
</template>

<script>
const image1 = require('../assets/pic-5.jpg');
const image2 = require('../assets/pic-6.jpg');
export default {
  el: '#app',
  data () {
    return {
      images:[{
      src:image1,
      alt:'Healthy breakfast'
      }],
      sideimages:[{
      src:image2,
      alt:'Macroons'
      }],
      items:[{
      title:"More breakfast ideas.."
      },
      {
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      {
      paragraph:"Para 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      {
      paragraph: "Para 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      {
      paragraph: "Para 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      ],
      sidebars:[{
        title:"Sidebar deserts"
      },
      {
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      {
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus."
      },
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
