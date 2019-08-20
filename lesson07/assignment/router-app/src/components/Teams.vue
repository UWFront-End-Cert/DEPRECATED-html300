<template>
  <div class="card-deck text-center">
    <!-- Creates a card for each team in the TeamsList array using Bootstrap card class -->
    <div v-for="team in TeamsList">
      <div class="card" style="width: 18rem;">
        <img v-bind:src="team.url" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{team.name}}</h5>
          <p class="card-text">{{team.text}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Teams',
    // Array of teams, links to their logos and some text
    data () {
      return {
        TeamsList: [
          {name: 'Aurora FC', url: "https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Flame FC', url: 'https://images.pexels.com/photos/2278646/pexels-photo-2278646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Lighting FC', url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Toranado FC', url: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', text: "Some quick example text to build on the card title and make up the bulk of the card's content."}
        ]
      }
    }
  }

</script>
