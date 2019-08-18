<template>
  <div role="tablist">
  <div  v-for="(t, index) in texts"  :key="index">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block v-b-toggle="'accordion-' + index " variant="info"> Customer Review {{ t.num  }} </b-btn>
      </b-card-header>
      
      <b-collapse :id="'accordion-' + index "  visible accordion="my-accordion" role="tabpanel">
      
      <b-card-body>
        <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        <b-card-text>{{ t.text }}</b-card-text>
        
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
        texts: [
           {
            id: 0,
            num: 1,
            text: 'one -- Anim pariatur cliche reprehenderit, eiusmod high life accusamus terry richardson'
           },
           {
              id: 1,
              num: 2,
              text: 'two -- Anim pariatur cliche reprehenderit, eiusmod high life accusamus terry richardson'
            },
           {
              id: 2,
              num: 3,
              text: 'three -- Anim pariatur cliche reprehenderit, eiusmod high life accusamus terry richardson'
            }
         ]
        };
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: pink;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>