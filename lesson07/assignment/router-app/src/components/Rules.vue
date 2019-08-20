<template>
  <div>
    <main class="main">
      <!-- Create accordian container -->
      <div class="accordion" id="accordionExample">
        <!-- Create a tab in accordian for each item in tabs array -->
        <div class="card" v-for="tab in tabs">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-info" type="button" data-toggle="collapse" v-bind:data-target="tab.targetName" aria-expanded="true" v-bind:aria-controls="tab.className">
                {{tab.name}}
              </button>
            </h2>
          </div>
          <div v-bind:id="tab.idName" v-bind:class="tab.className" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <h3>{{tab.heading}}</h3>
              <p>{{tab.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Rules',
    // Array for each tab in accordian
    data (){
      return{
        tabs: [
          {name: "Membership", targetName:"#collapseOne", idName:"collapseOne", className: "collapse show", heading:"Annual (365-day) Player Card Fee: $25.00", text:"All new players will need to complete the registration form. All players are required to provide photo identification (driver's license, state ID or passport) and a color photo for the player card."},
          {name: "Member Conduct", targetName:"#collapseTwo", idName:"collapseTwo", className: "collapse", heading:"Members:", text:"Unless specifically qualified herein to the contrary, the term member shall be taken to mean both Voting Members and non-voting Affiliated Members."},
          {name: "Slide-tackling", targetName:"#collapseThree", idName:"collapseThree", className: "collapse", heading:"Slide-tackling is NEVER allowed in these age brackets", text:"Slide-tackling is defined as the following: Going to ground to make a play on the ball that engages a player currently in possessions of the ball or may result in contact with another player."}
        ]
      }
    }
  }
</script>
