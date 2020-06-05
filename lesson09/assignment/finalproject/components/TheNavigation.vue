<template>
  <nav id="nav">
    <h4>Let's Travel</h4>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/brazil">Brazil</nuxt-link></li>
      <li><nuxt-link to="/hawaii">Hawaii</nuxt-link></li>
      <li><nuxt-link to="/jamaica">Jamaica</nuxt-link></li>
      <li><nuxt-link to="/panama">Panama</nuxt-link></li>
    </ul>
  </nav>

</template>

<style scoped>
 #nav {
   display: flex;
   flex-direction: row;
   padding: 30px;
 }

 #nav a {
   font-weight: bold;
   color: #2c3e50;
   padding: 0 10px;
 }

 #nav a.vue-school-active-class {
   color: #ab26ab;
 }
 li {
   list-style: none;
   display: inline;
   padding: 0;
   overflow: hidden;
   background-color: white;
}

li {
  float: left;
}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 10px;
  text-decoration: none;
}

li:hover {
  background-color: aqua;
}
 </style>
