<template>
  <div id="bbutton">
    <app-modal></app-modal>

  </div>
  <span id="modal">
    <div>
      <h3>Let decadence be your guide. - Oscar Wilde*</h3>
      <button @click="toggleShow">
        <span v-if="isShowing">Well, sort of</span>
        <span v-else>*disclaimer</span>
      </button>
      <app-index v-if="isShowing" class="modal">

      </app-index>
    </div>
  </span>

  <span id="indexarea">
    <div>
      <h2>Something he would have said.</h2>
      <slot></slot>
    </div>
  </span>


</template>

<script type="text/javascript">
import Index from '@/pages/index'
import {toggle} from '@/mixins/toggle'

export default {
  name: 'modal',
  mixins: [toggle],
  components {
    appIndex: Index
  }
}
/*
const bbutton = new Vue({
  el: '#bbutton',
  components: {
    appModal: Modal,
      }
});
*/
</script>
