<template lang="html">
<div>
<h1>{{test}}</h1>
<button v-on:click="greet">Greet</button>
</div>
</template>

<script>
      import axios from 'axios'
      export default {
          data() {
                return {
                test: ""
                }
          },
          created: function() {
             this.greet();
          },
          methods: {
            greet: function() {
              this.test = 'Loading...';
              var vm = this;
              axios.get("https://www.themealdb.com/api/json/v1/1/randomselection.php")
              .then (function (response) {
                console.log(response.data["meals"][1]);
                vm.test = response.data["meals"][2].strMeal;

              })
              .catch(function (error) {
                console.log(error);
              })
            }


          }
      }
</script>

<style lang="css" scoped>
</style>
