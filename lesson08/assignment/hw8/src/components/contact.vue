<template>
    <div>
        <b-container fluid>
            <!-- ###### V-IF ######## -->
            <div v-if="login"><h1>You are Login</h1></div>
            <div v-else><h1>Please login</h1> </div>
             <!-- #######  modals  ####### -->
            <h2 class="mt-4 text-center" >modals </h2>
            <b-button v-b-modal.modal-1>FeedBack</b-button>
             <!-- Modal body -->
            <b-modal id="modal-1" title="Thank You!">
                <form>
                    <div class="form-group">
                        <label class="mt-3">Name</label>
                        <input type="text" class="form-control form-control-lg" placeholder="user name">
                        <label class="mt-3">Email</label>
                        <input type="email" class="form-control form-control-lg" placeholder="xyz@yahoo.com">
                        <label class="mt-3">Password</label>
                        <input type="password" class="form-control form-control-lg" placeholder="*******">
                        <input type="submit" value="Submit" class="mt-3 btn btn-success">
                    </div>
                </form>
            </b-modal>

            <!-- #######  popover  ####### -->
            <h2 class="mt-4 text-center" >popover </h2>
            <b-row class="text-center ">
                 <b-col md="4" class="py-3">
                    <b-button v-b-popover.hover.top="'Exit'" variant="primary">Log Out</b-button>
                </b-col>
                <b-col md="8" class="px-5">
                    <b-button v-b-popover.hover.bottom="'Sign IN'" variant="primary"
                            v-on:click="toggleview"> Log In</b-button>
                </b-col>
             </b-row>
            
            <!-- #######  Tooltip  ####### -->
            <h2 class="mt-4 text-center" >tooltip </h2>
            <b-row>
                <b-col md="4" class="py-4">
                <b-button id="button-1" variant="outline-success">Live chat</b-button>
                </b-col>
                <b-col md="4" class="py-4">
                <b-button id="button-2" variant="outline-success">Html chat</b-button>
                </b-col>
                <b-col md="4" class="py-4">
                <b-button ref="button-3" variant="outline-success">Alternative chat</b-button>
                </b-col>
            </b-row>

            <!-- Tooltip title specified via prop title -->
            <b-tooltip target="button-1" title="Online!"></b-tooltip>

            <!-- HTML title specified via default slot -->
            <b-tooltip target="button-2" placement="bottom">
                Hello <strong>World!</strong>
            </b-tooltip>

            <!-- Tooltip for an element identified by ref -->
            <b-tooltip :target="() => $refs['button-3']" title="Alternative!"></b-tooltip>
        
        </b-container>
    </div>  
</template>

<script>
  export default {
      name: "contact",
      data(){
          return {
              login: false
          };
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    min-height: 100vh;
    background: rgb(224, 207, 210);
}
</style>
