<template>
<div class="Trips">
  <b-row>
    <b-col lg='2' sm="12">
      <div class="search-wrapper">
        <label>
          <h2>Search</h2>
        </label>
        <input type="text" v-model="search" placeholder="Search location..." />
        <div class='side'>

          <ul class="side__list" data-title="Central America">
            <input checked type="checkbox" v-on:click="checkCA = !checkCA"
            @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">

            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Central America"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <ul class="side__list" data-title="Asia">
            <input checked type="checkbox" v-on:click="checkA = !checkA"
            @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">
            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Asia"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <ul class="side__list" data-title="Europe">
            <input checked type="checkbox" v-on:click="checkE = !checkE"
            @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))">
            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Europe"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <!-- Other should not be shown but is there incase new continent needs to be added -->
          <div v-for="(card, idx) in decks" v-bind:key="idx">
            <div v-if='!["Europe", "Asia", "Central America"].includes(card.area)'>
              <ul class="side__list" data-title="Other">
                <li class="side__item">
                  {{card.location}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </b-col>
    <b-col lg='10' sm="12">
      <div class='card-multiple'>
        <b-row>
          <b-col md='6' lg='4' sm="12" v-for="(card, idx) in flist" :key="idx" :id="card.id">
            <card-single :card='card'> </card-single>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>


</div>
</template>

<script>
import {
  decks
} from '../data/util.js'

import Card from '@/components/Card.vue'

export default {
  name: 'Trips',
  components: {
    'card-single': Card
  },
  computed: {
    flist: function() {
      return this.decks.filter(function(litem) {
        let areaSet = this.area != []
        let searchSet = this.search != ''
        let includesSearchTerm = (litem.location.toLowerCase().includes(this.search.toLowerCase()))
        let isInArea = (this.area.includes(litem.area.toLowerCase()))
        if (areaSet && searchSet) {
          return includesSearchTerm && isInArea
        } else if (areaSet) {
          return isInArea
        } else if (searchSet) {
          return includesSearchTerm
        }
        return true
      }, this)
    }
  },
  data() {
    return {
      search: '',
      area: '',
      checkCA: true,
      checkA: true,
      checkE: true,

      getSelectedOptions: function(checkCA, checkA, checkE) {
        var opts = [];
        if (checkCA) {
          opts.push('central america')
        }
        if (checkA) {
          opts.push('asia')
        }
        if (checkE) {
          opts.push('europe')
        }

        opts = opts.map(item => item.toLowerCase());
        return opts;
      },


      areaFilter: function(area) {
        console.log("area filter with ", area)
        this.area = area
      },


      decks: decks.filter(function(litem) {
        return litem.area != null;
      })
    }
  }
};
</script>



<style scoped lang='scss'>
@import './src/main.scss';
.side {
    margin-top: 1em;
    text-align: left;
    display: block;
    padding: 0.5rem;
    &__list {
        text-align: left;
    }
    &__list[data-title]::before {
        content: attr(data-title);
    }
}

ul {
    display: block;
    @include media-query($mq: 'md') {
        display: inline-block;
    }
}

ul[data-title]::before {
    content: attr(data-title);
    text-decoration: underline;
    font-weight: bold;

    padding: 0;
}

h2 {
    padding: 0.5em;
    text-align: center;
}
</style>
