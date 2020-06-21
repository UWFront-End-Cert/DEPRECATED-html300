<!-- Copyright 2020 Markus Schiffer -->
<!-- The following code is for the title of the whole page. It uses slots and filters. -->

<template>
    <h4 class="m-0 text-left pr-md-5 text-primary">{{ 'Welcome to Assignment' | myUpper }} <slot name="aNum">X</slot></h4>
</template>

<script>
export default {
    name: 'mytitle',
    filters: {
        myUpper(val) {
            return val.toUpperCase();
        }
    }
}
</script>
