<template>
<article class="mconv">
  <!--{{this.money}}-->
  <label for="usmoney">USD:</label>
  <input v-on:click='reset()' v-on:change='updateValue()' ref="usmoney" type="number"  min="0" step="0.01" id="usmoney" name="usmoney"><br>
  <label for="othermoney"> {{this.otherList[0]}}: </label>
  <input v-on:click='reset()' v-on:change='updateValue()' ref="othermoney" type="number" min="0" step="0.01" id="othermoney" name="othermoney">
  <br>
</article>
</template>

<script>
export default {
  props: {
    money: Object,
    cur: String
  },
  methods: {
    reset() {
      this.$refs['othermoney'].value = '';
      this.$refs['usmoney'].value = '';
    },
    updateValue() {
      let o = this.c[this.otherList[0]]
      let u = this.c.USD
      let e = this.c.EUR
      if (this.$refs['usmoney'].value != '') {
        let preround = (e/u) * o * this.$refs['usmoney'].value
        this.$refs['othermoney'].value = +(preround.toFixed(2))
      } else if (this.$refs['othermoney'].value != '') {
        let preround = (u/o) * this.$refs['othermoney'].value
        this.$refs['usmoney'].value = +(preround.toFixed(2))
      }
    }
  },
  data() {
    let c = this.money
    let ky = Object.keys(c)
    let usdList = ['USD']
    let eurList = ['EUR']
    let otherList = [this.cur.toUpperCase()]
    console.log(otherList)
    console.log('otherList')

    return {

      c: c,
      usdList: usdList,
      eurList: eurList,
      otherList: otherList

    }
  }

}
</script>

<style scoped lang="scss">
.form-filter {
    display: block;
    position: absolute;
    padding-left: 1.5rem;
    padding-top: 0;
    padding-bottom: 4em;
    margin-left: 4em;
}

.chart {
    border: none; //1px solid #000;
    padding: 1.5rem;
    width: 100%;
    //overflow-x: visible;
    //overflow-x: visible;

    &__title {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }
    &__copy {
        font-size: 0.875rem;
    }
}
</style>
