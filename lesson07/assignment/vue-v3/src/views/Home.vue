<template>
  <div class="home">

 
 <p v-if="display">New Trip Reports Have Been Submitted in the Past 24 hours</p>
 <p v-else>No Trip Reports Have Been Submitted Recently</p>

    
    <main class="main">
<!--grid with two main areas for an eventual map and a listing of recent trip reports-->
            <div class="row">
                <div class="col-12 col-md-8">{{ map }}</div>
<!--tooltip for asking user to input trip report-->
                <div class="col-6 col-md-4"><a href="#" data-toggle="tooltip" title="Click to Enter A New Report">{{ last }}</a></div>
            </div>
    </main>
  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {
      map: 'Insert Map of Trip Reports',
      last: 'Latest Trip Reports',
      display: true
    }
  } 
}



</script>
