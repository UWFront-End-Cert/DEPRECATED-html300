<template>
  <div class="home">
    <main class="main">
<!-- Avi info for travellers stacking on small screens -->
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6">{{haz_map}}</div>
                <div class="col-12 col-sm-4 col-md-6">{{avi_for}}</div>
            </div>

<!-- Weather infof or travellers changing layout to stack on small screens-->
            <div class="row">
                <div class="col-12 col-sm-4 col-md-6">{{last_area}}</div>
                <div class="col-12 col-sm-4 col-md-3">{{area_rad}}</div>
                <div class="col-12 col-sm-4 col-md-3">{{telemetry}}</div>
            </div> 
    </main>
  </div>
</template>

<script>

export default {
  name: 'grid',
    data() {
    return {
      haz_map: 'Avalanche Hazard Map',
      avi_for: 'Avalanche Area Forecasts',
      last_area:'Latest Area Weather Forecasts',
      area_rad: 'Area Radar',
      telemetry: 'Telemetry',
    }
  }
}
</script>
