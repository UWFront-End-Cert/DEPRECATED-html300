<template>
  <!--Index or Main Page for the World of Butterflies - page 1-->
  <section class="container">
    <head>
      <meta property="og:url" content="https://www.si.edu/spotlight/buginfo/butterfly" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Smithsonian Butterflies" />
<meta property="og:description" content="A Site to learn about butterflies"
/>
<meta property="og:image" content="https://www.si.edu/spotlight/buginfo/butterfly">

</head>

<!--header stuff this slot will insert the Butterfly Header component text-->
  <!--<div class="header">
     <slot name="butterfly-header"></slot>
  </div>-->


<!--nav bar-->
<div class="nav" style="background-color: #eb34e5;">
<img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
<h3>Our Menu</h3>
  <!--<nuxt-link to="/butterfly-zoo" class="butterlinks">Butterfly Museum</nuxt-link>
  <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
   <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>-->
</div>

<h2 style="font-size: 300%;">Let decadence be your guide. - Oscar Wilde</h2>
   <div id="disclaimers">
    <span v-bind:title="disclaimer">*</span>
  </div>


  <img src="https://images.unsplash.com/photo-1465505041184-f383907cc134?ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" width="300px" alt="a white butterfly sits on a purple flower">

      <div class="links">
     <div id="fb-root"></div>
   <script>
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src =
"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

</script>
<!-- Your share button code -->
<div class="fb-share-button" data-href="https://www.si.edu/spotlight/buginfo/butterfly" data-layout="button_count">
</div>
   <div>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>

      <!--  <div class="wrapper">
              <h1 class="heading">Names of Species</h1>
              <section class="container" v-if="insects">
                <card v-for="insect of insects"
                :key="insect.id"
                :insect="insect"/>-->

               <!--name of species on biodiversity site
               https://api.gbif.org/v1/species?datasetKey=ca515b82-e301-43ff-9f69-2c0116e1c95b&sourceId=6B773CF4C72F0995A4228111BFAA28B8.taxon-->

           <!--butterfly atlas api
           https://species-ws.nbnatlas.org/species/NHMSYS0000841034.json
           catagories: "nameString" and "status"-->
              <!--</section>
            </div>-->

  </section>
</template>

<script>
//import butterfly-header from "@/components/butterflyHeader";
//import axios from 'axios'

export default {
  components: {
    AppLogo
    //'butterfly-header': butterflyHeader

    /*   data() {
         loading: true,
         insects: null,
         errored: false
       },
       mounted() {
         axios.get(https://species-ws.nbnatlas.org/species/NHMSYS0000841034.json)
          .then(response =>(this.insect = response.data))
           .catch( error => {
             this.errored = true
           })
           .finally(() => this.loading = false)
       }
      },
    */
      }
}



/*
 let disclaimers = new Vue({
    el: '#disclaimers',
    data: {
      disclaimer: 'Something he would have said.'
    }
  })

}
*/

</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #b8d4fc;
}

.header {
  display: block;
  width: 100%;
  padding: 3%;
  background-color: 08fc3d;
  color: white;
}

.nav {
  background-color: #eb34e5;
  width: 100%;
  padding: 2%;
  color: white;
  }

.butterlinks {
  color: white;
  text-decoration: none;
  padding: 2%;
}

.links {
  padding-top: 15px;
}
</style>
