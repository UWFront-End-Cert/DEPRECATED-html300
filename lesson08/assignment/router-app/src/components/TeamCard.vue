<!-- Layout for how to rearrange team images and information -->
<template>
  <div id="app">
    <div class="card" style="width: 18rem;">
      <img @click="toggle" :id="TeamCard.id" v-bind:src="TeamCard.url" class="card-img-top" v-bind:alt="TeamCard.alt">
      <div class="card-body">
        <h5 class="card-title">{{TeamCard.name}}</h5>
        <p class="card-text">{{TeamCard.text}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from './../mixins.js';
  export default {
    name: 'TeamCard',
    mixins: [mixin],
    props: {
      'TeamCard': {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        isActive: false
      }
    }
  }
</script>

<style>
/* Styling for border around images */
  .newClass{
    border-style: solid;
    border-color: green;
    border-radius: 5px;
  }
</style>
