<template>
  <section class="images" :id="card.id">
  <h2 > {{card.location}}</h2>
<!--https://vuejs-examples.netlify.app/#!/v-for -->
<!--https://forum.vuejs.org/t/simple-clarification-of-when-using-key-with-v-for-is-appropriate-and-why/28966/5 -->
  <b-img

      :alt="card.text"
      :src="getImgUrl(card.images)"
    fluid></b-img>



  </section>
</template>

<script>
export default {
name: 'Images',
props: {
card: {
type: Object,
required:true
}
},
methods:{
getImgUrl: function(pic){
return require('@/assets/'+pic)
}},
  data() {
    return {

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
