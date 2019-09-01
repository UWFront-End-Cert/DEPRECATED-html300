<template>
<div>
    <ParkHeader/>
<div>
    <div class="cards">
         
          <div class="card">
            <img src="../assets/ebla.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">Ebey’s Landing National Historical Reserve</h5>
            </div>
            <a href="https://www.nps.gov/ebla/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>
       
          <div class="card">
            <img src="../assets/sajh.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">San Juan Island National Historical Park</h5>
            </div>
            <a href="https://www.nps.gov/sajh/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>
      
          <div class="card">
            <img src="../assets/klse.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">Klondike Gold Rush - Seattle Element</h5>
            </div>
            <a href="https://www.nps.gov/klse/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>
         
          <div class="card">
            <img src="../assets/mora.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">Mount Rainier National Park</h5>
            </div>
            <a href="https://www.nps.gov/mora/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>
      
          <div class="card">
            <img src="../assets/olym.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">Olympic National Park</h5>
            </div>
            <a href="https://www.nps.gov/olym/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>

          <div class="card">
            <img src="../assets/wing.jpg" class="card-img-top" width="100" alt="...">
            <div class="card-body d-flex align-items-center">
              <h5 class="card-title">Wing Luke Museum</h5>
            </div>
              <a href="https://www.nps.gov/wing/index.htm" class="btn btn-primary m-3">Check It Out</a>
          </div>

    </div>
</div>
</div>
</template>

<script>
import Nav from '../components/Nav'
import ParkHeader from '../components/ParkHeader'

export default {
    components: {
        Nav,
        ParkHeader
    }
}

</script>

<style scoped>
.cards {
    display: flex;
    flex-flow: row wrap;
}

.card {
    box-sizing: border-box;
    width: 280px;
    padding: 10px;
    border: 2px solid #cccccc;
    box-shadow: 0 2px 2px #aaaaaa;
    margin: 10px;

}

</style>