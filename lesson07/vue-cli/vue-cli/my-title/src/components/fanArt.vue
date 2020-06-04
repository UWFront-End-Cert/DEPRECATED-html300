<template>


    <div id="butterPix">
    <div v-for="picture in pictures">
        <img src="https://www.nationalgeographic.com/animals/invertebrates/m/monarch-butterfly/gfx/loading_spinner.gif" v-img :data="picture">
    </div>

  </div>


</template>
<script>
export default {
  name: 'fanArt'

  data() {
    return {

      Vue.directive('img', function(el){
    var img = new Image();
    var url = $(el).attr('data')
    img.src = url
    img.onload = function() {
      el.src = url;
    }
  });


  new Vue({
    el: '#butterPix',
    data: {
      pictures: [
        'https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        'https://images.unsplash.com/photo-1542650507-17d51cecbbb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=381&q=80',
        'https://images.unsplash.com/photo-1535068484622-7a077e5aa558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1560257777-820fccc5ee0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
           ]
          }
       });
      }

   }
}

</script>

<style>
#butterPix div {
  display: inline-block;
  margin: 6px 8px;
}

img {
  display: block;
  width: 200px;
  height: 200px;
}
</style>
