<template>
<section>
<MarketHeader />
<section class="markets">
<h2>Miles from City Center and Market Name</h2>
    <section v-if="markets">
        <Markets
          v-for="market of markets"
          :key="market.id"
          :market="market"
        />
    </section>
    </section>
</section>
</template>

<script>
import Markets from '../components/Markets'
import MarketHeader from '../components/MarketHeader'
import axios from 'axios'

export default {
    components: {
        Markets,
        MarketHeader
    },

  data() {
    return {
      errored: false,
      loading: true,
      markets: [
      {"id":"1012149","marketname":"0.3 Seattle City Hall Farmers Market featuring Pike Place Market Express", 
        "Address":"600 4th Ave, Seattle, Washington, 98104","GoogleLink":"http:\/\/maps.google.com\/?q=47.603679%2C%20-122.330361%20(%22Seattle+City+Hall+Farmers+Market+featuring+Pike+Place+Market+Express%22)","Products":"Baked goods; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts","Schedule":"05\/31 to 10\/11 Mon: 10:00 AM-;Tue: 10:00 AM-2:00 PM;"},
      {"id":"1008101","marketname":"0.4 Pioneer Square Farmers' Market featuring Pike Place Market Express",
      "Address":"S Main Street and Occidental Ave S, Seattle, Washington, 98104","GoogleLink":"http:\/\/maps.google.com\/?q=47.600048%2C%20-122.332888%20(%22Pioneer+Square+Farmers'+Market+featuring+Pike+Place+Market+Express%22)","Products":"Cut flowers; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Poultry; Prepared foods (for immediate consumption)","Schedule":"06\/19 to 10\/30 Wed: 10:00 AM-2:00 PM;"},
      {"id":"1012151","marketname":"0.4 Pike Place Market - Evening Farmers Market",
      "Address":"1600 Pike Place, Seattle, Washington, 98101","GoogleLink":"http:\/\/maps.google.com\/?q=47.609566%2C%20-122.341986%20(%22Pike+Place+Market+-+Evening+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"06\/01 to 10\/12 Wed: 5:00 PM-8:00 PM;"},
      {"id":"1012153","marketname":"0.6 Pike Place Market - 1st Hill Farmers Market",
      "Address":"1200 9th Ave, Seattle, Washington, 98101","GoogleLink":"http:\/\/maps.google.com\/?q=47.610091%2C%20-122.328889%20(%22Pike+Place+Market+-+1st+Hill+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Wine, beer, hard cider","Schedule":"06\/03 to 10\/14 Fri: 10:00 AM-2:00 PM;"},
      {"id":"1012152","marketname":"1.3 Pike Place Market - South Lake Union Farmers Market",
      "Address":"410 Terry Ave N, Seattle, Washington, 98109","GoogleLink":"http:\/\/maps.google.com\/?q=47.622595%2C%20-122.336880%20(%22Pike+Place+Market+-+South+Lake+Union+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and\/or maple products; Nuts; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"06\/02 to 10\/13 Thu: 10:00 AM-2:00 PM;"},
      {"id":"1004165","marketname":"1.4 Capitol Hill Farmers Market",
      "Address":"Broadway Ave E and E Pine Street, Seattle, Washington, 98122","GoogleLink":"http:\/\/maps.google.com\/?q=47.6156044%2C%20-122.3126680%20(%22Capitol+Hill+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Poultry; Prepared foods (for immediate consumption)","Schedule":"01\/03 to 12\/18 Sun: 11:00 AM-3:00 PM;"},
      {"id":"1011334","marketname":"2.0 Madrona Farmers Market",
      "Address":"1126 Martin Luther King Jr. Way, Seattle, Washington, 98122","GoogleLink":"http:\/\/maps.google.com\/?q=47.612666%2C%20-122.295403%20(%22Madrona+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Crafts and\/or woodworking items; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and\/or body care products; Wine, beer, hard cider","Schedule":"05\/15 to 09\/25 Fri: 3:00 PM-7:00 PM;"},
      {"id":"1010145","marketname":"2.5 Queen Anne Farmers Market",
      "Address":"W Crockett Street and Queen Anne Ave N, Seattle , Washington, 98109","GoogleLink":"http:\/\/maps.google.com\/?q=47.637172%2C%20-122.357601%20(%22Queen+Anne+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"06\/05 to 10\/16 Thu: 3:00 PM-7:30 PM;"},
      {"id":"1004171","marketname":"3.7 West Seattle Farmers Market",
      "Address":"California Ave SW & SW Alaska, Seattle, Washington, 98116","GoogleLink":"http:\/\/maps.google.com\/?q=47.561366%2C%20-122.386783%20(%22West+Seattle+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Plants in containers; Poultry; Wine, beer, hard cider","Schedule":"01\/03 to 12\/18 Sun: 10:00 AM-2:00 PM;"},
      {"id":"1004168","marketname":"3.8 Magnolia Farmers Market",
      "Address":"W McGraw Str and 33rd Ave W, Seattle, Washington, 98199","GoogleLink":"http:\/\/maps.google.com\/?q=47.6395490%2C%20-122.3996304%20(%22Magnolia+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Poultry; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"06\/04 to 10\/08 Sat: 10:00 AM-2:00 PM"},
      {"id":"1004166","marketname":"3.9 Columbia City Farmers Market",
      "Address":"S. Edmunds Street and 37th Ave. S., Seattle, Washington, 98118","GoogleLink":"http:\/\/maps.google.com\/?q=47.5586613%2C%20-122.2861515%20(%22Columbia+City+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Poultry; Prepared foods (for immediate consumption); Trees, shrubs; Wine, beer, hard cider","Schedule":"05\/04 to 10\/12 Wed: 3:00 PM-7:00 PM;"},
      {"id":"1011335","marketname":"4.1 Wallingford Farmers Market",
      "Address":"4850 Meridian Ave N, Seattle, Washington, 98103","GoogleLink":"http:\/\/maps.google.com\/?q=47.663876%2C%20-122.333175%20(%22Wallingford+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Crafts and\/or woodworking items; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and\/or body care products; Wine, beer, hard cider","Schedule":"05\/27 to 09\/30 Wed: 3:30 PM-7:00 PM;"},
      {"id":"1004170","marketname":"4.4 University District Farmers Market",
      "Address":"University Way NE and NE 50th, Seattle, Washington, 98105","GoogleLink":"http:\/\/maps.google.com\/?q=47.665626%2C%20-122.313033%20(%22University+District+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"01\/02 to 12\/31 Sat: 9:00 AM-2:00 PM;"},
      {"id":"1011333","marketname":"4.9 Ballard Farmers Market",
      "Address":"5300 Ballard Ave NW, Seattle, Washington, 98107","GoogleLink":"http:\/\/maps.google.com\/?q=47.667591%2C%20-122.384667%20(%22Ballard+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Crafts and\/or woodworking items; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and\/or body care products; Trees, shrubs; Wine, beer, hard cider","Schedule":"01\/01 to 12\/31 Sun: 10:00 AM-3:00 PM;"},
      {"id":"1004018","marketname":"5.0 Mercer Island Farmers Market",
     "Address":"7700 SE 32nd Street, Mercer Island, Washington, 98040","GoogleLink":"http:\/\/maps.google.com\/?q=47.581953%2C%20-122.235042%20(%22Mercer+Island+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Crafts and\/or woodworking items; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"06\/08 to 10\/12 Sun: 10:00 AM-3:00 PM;" },
      {"id":"1004169","marketname":"5.1 Phinney Farmers Market",
      "Address":"N 67th Street and Phinney Ave N, Seattle, Washington, 98103","GoogleLink":"http:\/\/maps.google.com\/?q=47.677741%2C%20-122.353297%20(%22Phinney+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Poultry; Prepared foods (for immediate consumption)","Schedule":"06\/03 to 09\/30 Fri: 3:30 PM-7:30 PM;"},
      {"id":"1002917","marketname":"6.5 Bellevue Farmers Market",
      "Address":"1717 Bellevue Way NE, Bellevue, Washington, 98004","GoogleLink":"http:\/\/maps.google.com\/?q=47.626%2C%20-122.202%20(%22Bellevue+Farmers+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Wine, beer, hard cider","Schedule":"05\/12 to 10\/27 Thu: 3:00 PM-7:00 PM;"},
      {"id":"1000666","marketname":"7.8 Kirkland Wedneseday Market",
      "Address":"Marina Park, 25 lakeshore plz , Kirkland, Washington, 98033","GoogleLink":"http:\/\/maps.google.com\/?q=47.6754967%2C%20-122.2088210%20(%22Kirkland+Wedneseday+Market%22)","Products":"Baked goods; Cheese and\/or dairy products; Crafts and\/or woodworking items; Cut flowers; Eggs; Fish and\/or seafood; Fresh fruit and vegetables; Fresh and\/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Nuts; Prepared foods (for immediate consumption); Soap and\/or body care products","Schedule":"06\/03 to 09\/23 Wed: 2:00 PM-7:00 PM;"}
      ]
    }
  },
//   mounted () {
//   axios
//     .get('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=98174')
//     .then(response => (this.markets = response.data))
//     .catch(error => {
//       console.log(error)
//       this.errored = true
//     })
//     .finally(() => this.loading = false)
//   }
  
}
</script>

<style scoped>
.markets {
    display: flex;
    flex-flow: row wrap;
}

.market {
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid #cccccc;
    box-shadow: 0 2px 2px #aaaaaa;
    margin: 10px;

}

</style>