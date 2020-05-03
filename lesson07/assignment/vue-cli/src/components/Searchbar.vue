<template>
<!--ideas-->
<!--https://codepen.io/AndrewThian/pen/QdeOVa-->


<div class='search'>
               <h2>search</h2>
            </div>


              <div class="search-wrapper">
                <input type="text" v-model="search" placeholder="Search title.."/>
                    <label>Search title:</label>
              </div>
              <div class="wrapper">
                <div class="locations" v-for="cnt in filteredList">
                  <a v-bind:href="post.link" target="_blank">
                    <img v-bind:src="post.img"/>
                    <small>posted by: {{ post.author }}</small>
                    {{ post.title }}
                  </a>
                </div>
              </div>




</template>

<script>

export default {name:'search'};
</script>


<style scoped lang='scss'>
@import './src/main.scss';
</style>
