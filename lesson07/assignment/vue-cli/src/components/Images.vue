<template>
  <div class="hello">
<!--https://vuejs-examples.netlify.app/#!/v-for -->

    <b-img
      v-for="item in imageItems"  v-bind:key="item"
      :alt="item.text"
      :src="item.image"
    fluid></b-img>



  </div>
</template>

<script>
export default {
  data() {
    return {
    imageItems:
     [
      {
        image: require("@/assets/belize.png"),
        text: "Picture of Belize"
      },
      {
        image: require("@/assets/costarica.png"),
        text: "Costa Rica - Manuel Antonio National Park"
      },
      {
        image: require("@/assets/croatia.png"),
        text: "Picture of Croatia"
      },
      {
        image: require("@/assets/italy.png"),
        text: "Picture of Italy"
      },
      {
        image: require("@/assets/thaibeach.png"),
        text: "Picture of beach in Thailand"
      },
      {
        image: require("@/assets/thai.png"),
        text: "Picture of Thailand"
      }
    ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
