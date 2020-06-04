<template>
  <!--this is the basic template for the faq accordion page which will fill the template on baseAccordian-->
  <butterfly-header class="header">
    <div id="lead-text">
      <h1>{{title | upperCase}}</h1>
      <h2>{{message | upperCase}}</h2>
    </div>
  </butterfly-header>
</template>


<script>
Vue.filter('upperCase', function(value){
  return value.toUpperCase()
})

new Vue ({
  el: '#lead-text',
  data: {
    title: 'Welcome to the World of Butterflies',
    message: 'Your source for All Things Buttery that Fly'
  }

})
</script>
<style>

.header {
  display: block;
  width: 100%;
  padding: 3%;
  background-color: 08fc3d;
  color: white;
}

</style>
