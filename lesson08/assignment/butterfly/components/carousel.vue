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
      //title="the Blue Beret" alt="blue butterfly on a leaf"
         "https://images.unsplash.com/photo-1557912407-eb2900cf49e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      //title="the Tree Cleaver" alt="black and yellow butterfly on a pink flower"
         "https://images.unsplash.com/photo-1500350347612-85b7eff2f759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80"

        //title="the Desert Nymph" alt="black butterfly with red tale on brown rocks"
        "https://images.unsplash.com/photo-1580448458187-c9d2c7971317?ixlib=rb-1.2.1"
//title="Bettie Davis Eyes" alt="brown and orange butterfly with eyes on wings on a white flower"
        "https://images.unsplash.com/photo-1549219777-03dee35e19ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
//title="The Monarch" alt="an orange Monarch butterfly on an orange flower"
       "https://images.unsplash.com/photo-1573692822343-a4c703f8043c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
       //title="Tequila Sunrise" alt="an orange, yellow and white Butterfly"
       "https://images.unsplash.com/photo-1545636018-46ca15b2906d?ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
       //title="The Red Dawn"  alt="red butterfly on yellow flowers"
       "https://images.unsplash.com/photo-1554564681-55d557494207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
