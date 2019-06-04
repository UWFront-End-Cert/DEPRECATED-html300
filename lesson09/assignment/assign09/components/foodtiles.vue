<template>
  <div>
      <b-card-group deck>
          <div v-for = "(info,index) in recipeinfo" style = "width :460px ">
            <div v-if = "index < 4">
              <b-card>
                 <img :src="info.strMealThumb" alt=""  height = "350" width = "400" />
                 <b-card-title>
                    {{info.strMeal}}
                 </b-card-title>
                 <b-card-text>
                    {{info.strCategory}}
                 </b-card-text>
                 <b-button href="#" variant="warning">Get Recipe</b-button>
                 <div slot="footer"><small class ="text-muted"> Country of origin : {{info.strArea}}</small></div>
              </b-card>
            </div>
          </div>
      </b-card-group>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
          data : function() {
              return{
                 recipeinfo : "",
              }
          },
          created: function() {
             this.addtiles();
          },
          methods: {
            addtiles: function() {
              var vm = this;
              axios.get("https://www.themealdb.com/api/json/v1/1/randomselection.php")
              .then (function (response) {
                  console.log(response.data["meals"]);
                  vm.recipeinfo = response.data["meals"];
              })
              .catch(function (error) {
                console.log(error);
              })
            }
          }
  }
</script>

<style lang="css" scoped>
  
  img{
    margin: 0px;
    padding: 0px;
  }
</style>
