<template>
  <section class="container">
<!--blog Page for the World of Butterflies - page 3-->


<!--header stuff this slot will insert the Butterfly Header component text-->
<div class="header">
 <slot name="butterfly-header"></slot>
</div>


 <!--nav bar-->
  <div class="nav" style="background-color: #eb34e5;">
    <img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
    <h3>Our Menu</h3>
      <nuxt-link to="/butterfly-zoo" class="butterlinks">Butterfly Museum</nuxt-link>
      <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
       <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>
    </div>

    <!--this is the blog template for whatever needs to go into each blog box-->
    <h2>Buttery Blog</h2>

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

    </section>
  </template>

  <script>

  export default {
        data () {
      return {

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
      };
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


      .butter-logo {
        width: 20px;
        height: 20px;
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
