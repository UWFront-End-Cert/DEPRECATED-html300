<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
      <div class="jumbotron" v-if="showJumbotron">
        <h2 class="display-2 text-center bg-secondary">Content</h2>
        <p class="font-weight-bold">{{ soon }}</p>
        <!-- v-on:click enables button to change content if clicked, otherwise content is shown due to != making it false-->
      <button v-on:click="showJumbotron = !showJumbotron">Show</button>
    </div>
    <div class="jumbotron" v-else="showJumbotron">
      <h2 class="display-2 text-center bg-danger">Different Content</h2>
      <p class="font-weight-bold">{{ soon }}</p>
      <!-- v-on:click enables button to change content if clicked, otherwise content is shown due to != making it false-->
    <button v-on:click="showJumbotron = !showJumbotron">Show</button>
  </div>
    <div>
      <h2 class="display-2">{{ subhead }}</h2>
      <p class="lead">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //these are the variables that are places in the HTML sections that change based on conditional statements
      header: 'Home',
      showJumbotron: true,
      soon: 'Jumbotron Coming Soon!',
      subhead: 'Some Content',
      content: 'Dolcelatte cow cheese strings. Mozzarella babybel bocconcini goat cheese on toast blue castello cheese slices edam. Jarlsberg red leicester st. agur blue cheese boursin cream cheese cheese strings who moved my cheese chalk and cheese. Paneer say cheese halloumi pecorino chalk and cheese squirty cheese cheesecake queso. Boursin airedale cheeseburger squirty cheese cheesecake cream cheese pecorino cheeseburger. The big cheese cheese slices mozzarella croque monsieur the big cheese hard cheese cheesy feet paneer. Caerphilly lancashire camembert de normandie dolcelatte red leicester cottage cheese cheese strings taleggio. Red leicester cheesecake fromage lancashire cut the cheese caerphilly melted cheese chalk and cheese. Cheese on toast.'

    }
  }
}
</script>

<style>
</style>
