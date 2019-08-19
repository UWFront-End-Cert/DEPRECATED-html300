<template>
   <div id='app'>
      <h2 class="mt-4 text-center">{{ message }}</h2>
        <p>Numbre of Orders: {{counter}}</P>
      <!-- this page use BootstrapVue Grid system  -->
      <b-container class="bv-example-row">
      <b-row>
           <!-- 1st column -->
         <b-col md  id="e1" > 
            <h4>Beef</h4>
            <div class="entrees" id="e3">
               <div v-for = "food in rice" :key="food.id">
                 {{ food.item }} - ${{ food.price}} <br>
                    <button v-on:click ="order += 1">Order </button>
               </div>
            </div>
         </b-col>
            <!-- 2rd column -->
         <b-col md  id="e3" > 
            <h4>Beef</h4>
            <div class="entrees" id="e4">
               <div v-for = "food in beef" :key="food.id">
                 {{ food.item }} - ${{ food.price}} <br>
                    <button v-on:click ="order += 1">Order </button>
               </div>
            </div>
         </b-col>
            <!-- 3rd column -->
         <b-col md id="e1">
            <h4>Checken</h4>
               <div v-for = "food in chicken" :key="food.id">
                 {{ food.item }} - ${{ food.price}}   <br>
                    <button v-on:click ="order += 1">Order </button>
               </div>
         </b-col>
           <!-- 4th column -->
         <b-col md  id="e3" > 
            <h4>pork</h4>
            <div class="entrees" id="e2">
               <div v-for = "food in pork" :key="food.id"> 
                 {{ food.item }} - ${{ food.price}}  <br>
                    <button v-on:click ="order += 1">Order </button>
               </div>
            </div>
         </b-col>
      </b-row>
      </b-container>

      <footer class="my-5">
         <!-- ######  COLLAPSE  #######-->
         <h4 class="mt-5 text-center"> </h4>
         <div class="container justify-content-center">
            <button class="btn btn-success d-block mb-4" v-on:click="payment">
                <a v-bind:href="link" target="_blank">Payment </a>
            </button>
         </div>
      </footer>
   </div>
</template>

<script>
   export default {
      name: 'menu',
      data() {
         return {
            counter:0,
            message: " BootstrapVue Grid",
            link: './contact',
            rice : [
                     {id:0, item: "Stream Rice", price: "1.95"},
                     {id:1, item: "Chickeen Fried Rice", price: "6.77"},
                     {id:2, item: "Beef Fired Rice", price: "9.99"},
                     {id:3, item: "Pork Fired Rice", price: "8.99"}
                  ],
            beef : [
                     {id:0, item: "Beef Noodle Soup", price: "9.95"},
                     {id:1, item: "Hot and Sour Soup", price: "6.77"},
                     {id:2, item: "Pot Potsticker", price: "8.99"}
                  ],
            pork : [
                     {id:0, item: "Sweet and Sour Pork", price: "11.95"},
                     {id:1, item: "BBQ Pork", price: "8.77"},
                     {id:2, item: "Pot Potsticker", price: "8.99"}
                  ],
            chicken : [ 
                     {id:0, item: "General Tso Chicken", price: "12.95"},
                     {id:1, item: "Hot and Sour Soup", price: "6.77"},
                     {id:2, item: "Pot Potsticker", price: "8.99"}
                     ]
            };
      },
      methods: {
         order: function(){ this.counter++; } 
      }
            
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   p{
      color: red;
      font-size: 2rem;
   }
   #e1 {
      background: gold;
   }
   #e2 {
      background: plum;
   }
   #e3 {
      background: lightblue;
   }
   #e4{
      background: yellow; 
   }
</style>
