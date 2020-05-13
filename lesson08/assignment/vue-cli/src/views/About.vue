<template>
<div role="about">
    <div v-for="(stuff, idx) in accordionObject" :key='idx' class="panel panel-default">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-'+idx" variant="info">{{stuff.title}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-'+idx" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ stuff.text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</div>
</template>

<style scoped land='scss'>
header,
a {
    background-color: grey;
    color: black;
    font-weight: bold;
    border: none;
}

a:hover,
a:focus {
    color: white;
    background-color: grey;
}
</style>

<script>
import { accordionObject } from '../util.js'

export default {
    name: 'About',

    data() {
        return {
            accordionObject: accordionObject
        }
    },
}
</script>
