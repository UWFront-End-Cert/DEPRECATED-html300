<template>
<div class='Home'>
    <app-jumbo></app-jumbo>
    <app-caro :card='decks'></app-caro>
</div>
</template>

<script>
import { decks } from '../util.js'
//import your components here
import Jumbo from '@/components/Jumbotron.vue'
import Caro from '@/components/Carousel.vue'
export default {
    name: 'Home',
    components: {
        'app-jumbo': Jumbo,
        'app-caro': Caro
    },
    data() {
        return {
            decks: decks
        }
    },
}
</script>
