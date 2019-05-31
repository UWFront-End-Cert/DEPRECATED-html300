<template lang="html">
  <!-- Accordion -->
  <!-- Put accordion in 1x1 Grid to center on page -->
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- begin accordion code -->
        <div id="accordion">
          <!-- Card: North -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#north" aria-expanded="true" aria-controls="north">
                  North
                </button>
              </h5>
            </div>
            <!-- Card body -->
            <div id="north" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                occaecat
                craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>

          <!-- Card: Central -->
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#central" aria-expanded="false" aria-controls="central">
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div id="central" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                occaecat
                craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>

          <!-- Card: South -->
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#south" aria-expanded="false" aria-controls="south">
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div id="south" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                occaecat
                craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        <!-- end accordion -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
