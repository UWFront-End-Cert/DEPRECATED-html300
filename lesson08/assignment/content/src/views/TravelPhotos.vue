<template>
<div class='travel-photos'>
    <section class="images" id="belize">
        <h2 > Belize</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Belize"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="costarica">
        <h2 > Costa Rica</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Costa Rica"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="croatia">
        <h2 >Croatia</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Croatia"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="italy">
        <h2 >Italy</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Italy"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <section class="images" id="thailand">
        <h2 >Thailand</h2>
        <div v-for="(item, idx) in decks" :key="idx">
            <div v-if='item.location == "Thailand"'>
                <app-photos :card='item'></app-photos>
            </div>
        </div>
    </section>
    <!-- Other should not be shown but is there incase new continent needs to be added -->
    <div v-for="(item, idx) in decks" :key="idx">
        <div v-if='!["Thailand", "Costa Rica", "Croatia", "Italy", "Belize"].includes(item.location)'>
            <section class="images" id="other">
                <h2 >Other</h2>
                <app-photos :card='item'></app-photos>
            </section>
        </div>
    </div>
</div>
</template>


<script>

import Images from '@/components/Images.vue'
import { decks } from '../util.js'
export default {
    name: 'TravelPhotos',
    components: {
        'app-photos': Images
    },
    data() {
        return {
            decks: decks
        }
    },
}
</script>

<style scoped lang='scss'>
@import './src/main.scss';
section {
    display: block;
    vertical-align: top;
    padding: .5rem;
}

//inline-block
</style>
