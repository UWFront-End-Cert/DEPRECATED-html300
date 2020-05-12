<template>

<div role="about">
<div v-for="(stuff, idx) in accordionObject" :key='idx' class="panel panel-default">

  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle="'accordion-'+idx" variant="info">{{stuff.title}}</b-button>
    </b-card-header>
    <b-collapse :id="'accordion-'+idx" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ stuff.text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

</div>
</div>

</template>

<style scoped land='scss'>
header,a{
background-color: grey;
color: black;
font-weight:bold;
border: none;
}

a:hover, a:focus{
color:white;
background-color: grey;
}

</style>

<script>
  export default {
  name: 'About',

    data() {
      return {
      accordionObject: [
      {
      title:"Booking Conditions",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni mollitia modi quis, sequi minima voluptatum aliquid est veritatis, culpa voluptas dolores ea, itaque dolorem fugiat eius odio inventore quibusdam. Voluptatibus reiciendis magnam autem nam, quisquam eum cumque possimus. Perspiciatis, deleniti, illum alias cupiditate est, nihil atque, explicabo esse amet laudantium tempore? Placeat, optio tenetur. Facere laborum velit omnis ea veniam expedita, suscipit architecto consectetur itaque. Ipsum possimus, animi tenetur consequatur odio quasi illum deleniti amet itaque. Impedit ipsam cumque et, fuga. Sed distinctio laudantium, delectus aperiam obcaecati ex tenetur eius."
       },
      {
      title:"Travel Insurance",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iste distinctio dolores ab voluptatem, vel expedita nemo ducimus, porro dolor, molestiae? Enim quaerat ullam, labore quas perspiciatis veniam magnam suscipit quod optio eveniet corrupti in dolorem architecto fuga magni, laborum, atque! Tenetur mollitia, perferendis provident odit dolores, laboriosam necessitatibus veritatis neque eum magnam dicta corporis, nobis a. Tempora, delectus minus!"
      },
      {
      title:"FAQ",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam assumenda ullam corrupti provident, dolorum pariatur libero illum. Alias nam voluptate, iste tempore, distinctio possimus quo quibusdam velit mollitia rerum deleniti, nostrum repellendus reiciendis ducimus voluptatum culpa asperiores voluptas numquam totam officia doloribus fugiat itaque illum corrupti. Laudantium, reiciendis? Expedita itaque veritatis porro accusantium deserunt exercitationem, magnam cupiditate nemo sint tempora."
      }
      ],

      }
    }
  }
</script>
