<template>
  <!--this component, the baseAccordian page, it is the Parent component, it will give a basic template and code for the toggles to hide or show content.-->
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
<!--question goes here-->
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
<!--answer goes here-->
    <div v-show="show" class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
//data and method to toggle the hide or show state of content.
export default {
  components: {},
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 300px;
  padding: 10px;
}
.accordion {
  display: flex;
  cursor: pointer;

  margin: 0;
}
.title {
  margin: 0;
  color: darkgreen;
}
.content {
  text-align: left;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 10px;
}
</style>
