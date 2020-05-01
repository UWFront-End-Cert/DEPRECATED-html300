<template>
  <div class="hello">
<!--https://vuejs-examples.netlify.app/#!/v-for -->

    <b-img
      v-for="(item, idx) in imageItems" :key="idx"
      :id="item.id"
      :alt="item.text"
      :src="item.image"
    fluid></b-img>

    <!--https://forum.vuejs.org/t/simple-clarification-of-when-using-key-with-v-for-is-appropriate-and-why/28966/5 -->


  </div>
</template>

<script>
export default {
  data() {
    return {
    imageItems:
     [
      { id: 'belize',
        image: require("@/assets/belize.png"),
        text: "Picture of Belize"
      },
      { id: 'costarica',
        image: require("@/assets/costarica.png"),
        text: "Costa Rica - Manuel Antonio National Park"
      },
      { id: 'croatia',
        image: require("@/assets/croatia.png"),
        text: "Picture of Croatia"
      },
      { id: 'italy',
        image: require("@/assets/italy.png"),
        text: "Picture of Italy"
      },
      { id: 'thailand',
        image: require("@/assets/thaibeach.png"),
        text: "Picture of beach in Thailand"
      },
      { id: 'extra',
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
