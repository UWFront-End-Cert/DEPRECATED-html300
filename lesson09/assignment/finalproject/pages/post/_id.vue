<template>
   <div class="container">
     <article>
       <div class="header">
           <h1>Travel Website</h1>
       </div>
       <div class="navbar">
           <TheNavigation />
       </div>
       <h1 class="title">{{post.title}}</h1>
       <img>{{post.image}}</img>
       <p>{{post.content}}</p>
     </article>
     <aside>
       <h3>Posts you might enjoy</h3>
       <ul>
         <li v-for="related in relatedPosts" v-bind:key="related.id">
           <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
             {{related.title}}
           </nuxt-link>
         </li>
       </ul>
     </aside>
   </div>
 </template>

 <script>
 import TheNavigation from "@/components/TheNavigation";

   export default {
     data () {
       return {
         id: this.$route.params.id,
         posts: [
           {
             id: 'Waterfall',
             title: 'Iguaçu Falls',
             content:
             "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
           },
           {
             id: 'Mountain',
             title: 'About this Mountain',
             content:
               "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
           },
           {
             id: 'PanamaCity',
             title: 'About Panama City',
             content:
               "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
           },
         ]
       }
     },
     computed: {
       post () {
         return this.posts.find(post => post.id === this.id)
       },
       relatedPosts () {
         return this.posts.filter(post => post.id !== this.id)
       }
     },
     components: {
       TheNavigation
     }
   };
 </script>

 <style scoped>
   .container {
     display: flex;
     justify-content: space-between;
     line-height: 1.5;
   }
   article * {
     margin-bottom: 1rem;
   }
   aside {
     min-width: 280px;
     max-width: 280px;
     padding-left: 2rem;
   }
   .title {
     font-size: 2rem;
   }
 </style>
