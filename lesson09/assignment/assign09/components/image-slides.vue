<template lang="html">
  <b-container fluid class="p-4">
      <b-row>
          <b-col lg = 6 sm = 10 offset = 1>
              <b-carousel :="mainProps"
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  indicators
                  img-width = "800"
                  img-height = "600"
                  >
                    <b-carousel-slide
                        :img-src="require('../assets/bkground3.jpg')"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="require('../assets/bkground6.jpg')"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="require('../assets/bkground2.jpg')"
                    ></b-carousel-slide>
                </b-carousel>
          </b-col>
          <b-col lg = 4 sm = 10 class="mt-2 ml-5 aside" offset = 1>
                <b-img class = "p-4" :src="require('../assets/chef1.jpg')" alt="Chef Image" height = "300"></b-img>
                <h3>Chef of the Week</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </b-col>
      </b-row>
  </b-container>
</template>



<style lang="css" scoped>
  .b-img {
    height : 300px;
  }
  .aside{
    background-color: yellow;
    text-align: center;
  }
</style>
