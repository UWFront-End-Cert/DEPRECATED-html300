<template>
    <section class="container">
      <!--this is the blog page - page number 3-->
            <!--header stuff-->
            <router-view/>
        <header class="jumbotron-fluid text-white text-center">
              <h1 class="display-4">Welcome to The World of Butterflies</h1>
              <h1 class="lead">Your sources for all things buttery that fly</h1>
          <!--and inside the header is the nav bar/router links-->
           <div class="nav" style="background-color: #eb34e5;">
             <a class="navbar-brand" href="#">
               <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
               Our Menu</a>
             <p>
               <router-link :to="/App">Butterfly Home</router-link>
               <router-link :to="/butterfly-zoo">Butterfly Museum</router-link>
              <router-link :to="/butterfly-faq">Butterfly FAQs</router-link>
            </p>
           </div>
        </header>
        <!--this is the blog template for whatever needs to go into each blog box-->
           <h2 class="text-center">Buttery Blog</h2>
             <div id="bBlog">
               <span class="blog-box" v-for="entry in blogs" :key="entry.title">
                 <div v-tooltip="'Butterfly of the month'">
                   <img src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="brown butterfly orange flower">
                 </div>
               <div>
                 <h3> {{entry.title}} </h3>
                 <p>{{entry.text}} </p>
               </div>
           </span>
          </div>
        </div>
      </section>
</template>

<script>
export default {

  data () {
    return {
new Vue({
  el: '#bBlog',
  data: {

//this is the array of blog titles and paragraphs of text.
    blogs: [

       {
        title: "Buterfly Love",
        text: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
        the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.'
        },
       {

       title: "The Care and Feeding of Your Butterfly",
       text: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
       the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.'
       },

      {
      title: "Why butterflies make the best pets",
      text: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
      the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.'
       },

      {
       title: "Know your butterflies",
       text: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
       the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.'
       },
      {
      title: "Which is the right butterfly for you?",
     text: 'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly
     the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago.'
       }
    ]
   }
});
   }
  }
}
//This is to make the tooltip work
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

//styled the background of the page to be light blue, but the blog boxes to be white and readalbe

body {
  background-color: #b8d4fc;
}
header {
  background-color: #08fc3d;
  color: white;
  padding-top: 50px;
}
.menu {
  background-color: #ce1dde;
  margin: 2px;
  display: flex;
  justify-content: space-around;
}

#bBlog div {
  display: flex;
  flex-direction: column;
  margin: 6px 8px;
}

.blog-box {
 display: flex;
  flex-direction: row;
  margin: 50px;
  background-color: white;
}

h2 {
  color: magenta;
  font-size: 50px;
  font-weight: normal;
}

img {
  display: block;
  width: 300px;
  height: 300px;
}

h3, p {
  margin-left: 50px;
  font-weight: normal;
}

h3 {
  color: purple;
}
</style>
