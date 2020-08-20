<template>
  <div >
    <h1 class="display-1">{{ header }}</h1>
    <div id="grid-container">
      <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Grid'
      // "v-if v-else" statement to change content or UI.
    },
    gridData: [
      {
        h2: 'Blurb One',
        p: 'Roquefort say cheese when the cheese comes out everybodys happy.'
      },
      {
        h2: 'Blurb Two',
        p: 'Camembert de normandie gouda brie ricotta taleggio bavarian bergkase swiss boursin.'
      },
      {
        h2: 'Blurb Three',
        p: 'Bocconcini pepper jack cow macaroni cheese queso croque monsieur edam emmental.'
      },
      {
      h2: 'Blurb Four',
      p: 'Squirty cheese manchego monterey jack fromage.'
      },
      {
        h2: 'Blurb Five',
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
