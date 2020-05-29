<template>
  <h1>Butterfly Museum</h1>

    <div>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>

</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
//title="the Bombay Blue Beret" alt="blue butterfly on leaf"
        "https://images.unsplash.com/photo-1576031450181-9fcab802bb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
//title="the Tree Cleaver" alt="dark orange butterfly on pink flower"
        "https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//title="Big Bird" alt="yellow butterfly with blue tail"
        "https://images.unsplash.com/photo-1547990338-943dc0c27796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//title="Tequila Sunrise" alt="black butterfly with bright orange highlights in sunny tree"
        "https://images.unsplash.com/photo-1538860263234-d5e8282d1ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//title="Bettie Davis's Eyes" alt="red butterfly with blue highlights on a yellow flower"
        "https://images.unsplash.com/photo-1564293299687-d861e0144b97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//title="the Monarch" alt="orange monarch butterfly on a pink daisy"
        "https://images.unsplash.com/photo-1534198634523-ac9ebf960e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//title="Flutterbyes" alt="green butterflies walk around table of ornately carved oranges"
        "https://images.unsplash.com/photo-1531062499906-c6dc9747ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//title="the Desert Nymph" alt="black butterfly with red tale on brown rocks"
        "https://images.unsplash.com/photo-1580448458187-c9d2c7971317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
