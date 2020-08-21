<template>
  <div >
    <h1 class="display-1">{{ header }}</h1>
    <!-- want to iterate through wach object in columns to populate grid -->
    <div id="grid-container">
      <div class="grid-item">
        <h2>{{ subhead }}</h2>
        <p>Changing Content</p>
        <!--will use button to change content of grid with v-if-else-->
        <button v-if="columnOne in columns"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Grid'
      // "v-if v-else" statement to change content or UI.
    }
    columns: [
      {
        subhead: 'Blurb One',
        p: 'Roquefort say cheese when the cheese comes out everybodys happy.'
      },
      {
        subhead: 'Blurb Two',
        p: 'Camembert de normandie gouda brie ricotta taleggio bavarian bergkase swiss boursin.'
      },
      {
        subhead: 'Blurb Three',
        p: 'Bocconcini pepper jack cow macaroni cheese queso croque monsieur edam emmental.'
      },
      {
      subhead: 'Blurb Four',
      p: 'Squirty cheese manchego monterey jack fromage.'
      },
      {
        subhead: 'Blurb Five',
        p: 'Hard cheese brie say cheese.'
      }
    ]
      }
    }

</script>

<style>
  .grid-item {

  }
</style>
