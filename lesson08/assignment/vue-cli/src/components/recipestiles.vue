<template>
  <div>
      <b-card-group deck  >
        <div v-for="info in recdata" style = "width :460px ">
          <b-card>
             <img :src="info.image" alt="" @click = "showborder()"  height = "350" width = "425" />
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

</template>

<script>
  import recipe1 from '../assets/recipe-1.jpg'
  import recipe2 from '../assets/recipe-2.jpg'
  import recipe3 from '../assets/recipe-3.jpg'
  import recipe4 from '../assets/recipe-4.jpg'
  export default {
      data : function() {
          return{
          recdata: [
            {rectitle :'MEDITERRANEAN NACHOS',
            image : recipe1,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {rectitle :'MEDITERRANEAN NACHOS',
            image : recipe2,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {rectitle :'MEDITERRANEAN NACHOS',
            image : recipe3,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {rectitle :'MEDITERRANEAN NACHOS',
            image : recipe4,
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          ]
     }
  }
}
const imgborder = {
  methods :{
    showborder() {
       this.isActive = this.isActive ? false : true;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
