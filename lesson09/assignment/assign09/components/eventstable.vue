<template lang="html">
    <div role="tablist" >
      <div v-for="eventinfo in eventdetails">
          <b-card >
            <b-card-header header-tag="header"  role="tab">
              <b-button block href="#" v-b-toggle = "eventinfo.id" variant="info">{{eventinfo.name}} </b-button>
            </b-card-header>
            <b-collapse :id = "eventinfo.id" accordion="my-event" role="tabpanel">
              <b-card-body>
                <b-card-text right>Date :  {{eventinfo.date}}</b-card-text>
                <b-card-text right>Description : {{eventinfo.description}}</b-card-text>
                <b-card-text right>Venue :  {{eventinfo.location}}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {

        eventdetails:[
          {
            id :"event1",
          name: "Event 1" ,
          date : "March 23rd 2019",
          description :
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          location : "New York",
        },{
          id : "event2",
          name: "Event 2" ,
          date : "June 23rd 2019",
          description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
          title : " Chicago",
         },{
           id : "event3",
           name: "Event 3" ,
           date : "June 23rd 2019",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
            title : "Seattle",
         }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
