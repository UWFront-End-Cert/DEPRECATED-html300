<template>
  <div class="main-content">
      <div>
          <b-card-group deck  >
            <div v-for="(info,index) in recdata" style = "width :475px ">
              <b-card>
                <img v-if = "index === 0" :src="require('../assets/recipe1.jpg')" alt=""   height = "350" width = "425">
                <img v-if = "index === 1" :src="require('../assets/recipe-2.jpg')" alt=""  height = "350" width = "425">
                <img v-if = "index === 2" :src="require('../assets/recipe-3.jpg')" alt=""  height = "350" width = "425">
                <img v-if = "index === 3" :src="require('../assets/recipe-4.jpg')" alt=""  height = "350" width = "425">
                <b-card-title>
                  {{info.rectitle}}
                </b-card-title>
                <b-card-text>
                  {{info.description}}
                </b-card-text>
                <b-button href="#" variant="warning">Get Recipe</b-button>
                <div slot="footer"><small class="text-muted">Last updated 1 month ago</small></div>
              </b-card>
            </div>
            </b-card-group>
            </div>
        </b-card-group>

      </div>
  </div>
</template>


<script>
export default {
  data : function() {
      return{
      recdata: [
        {rectitle :'MEDITERRANEAN NACHOS',
        image : '../assets/recipe1.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {rectitle :'MEDITERRANEAN NACHOS',
        image : '../assets/recipe-2.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {rectitle :'MEDITERRANEAN NACHOS',
        image : '../assets/recipe-3.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {rectitle :'MEDITERRANEAN NACHOS',
        image : `"require('../assets/recipe-4.jpg')"`,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      ]
     }
}


}
</script>
