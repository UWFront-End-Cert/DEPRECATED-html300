<script>
  import TeamCard from '.././components/TeamCard.vue';
  export default {
    name: 'Teams',
    components: {
      TeamCard
    },
    // Array of teams, links to their logos and some text
    data () {
      return {
        TeamsList: [
          {name: 'Aurora FC', id: 1, alt:'Aurora FC logo', url: "https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Flame FC', id: 2, alt:'Flame FC logo', url: 'https://images.pexels.com/photos/2278646/pexels-photo-2278646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Lighting FC', id: 3, alt:'Lightning FC logo', url: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: "Some quick example text to build on the card title and make up the bulk of the card's content."},
          {name: 'Toranado FC', id: 4, alt:'Tornado FC logo', url: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', text: "Some quick example text to build on the card title and make up the bulk of the card's content."}
        ]
      }
    }
  }

</script>

<template>
  <div >
    <!-- Creates a card for each team in the TeamsList array using Bootstrap card class -->
    <section class="card-deck justify-content-center" v-if="TeamsList">
      <TeamCard
        v-for="TeamCard in TeamsList"
        v-bind:TeamCard="TeamCard"
      >
      </TeamCard>
    </section>
  </div>
</template>
