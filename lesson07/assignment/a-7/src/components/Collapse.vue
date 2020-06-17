<!-- Copyright 2020 Markus Schiffer -->

<template>
    <!-- Accordion with two main drop-downs, one in English, the other in German. Also contains tooltips specifing the langauage. -->
    <div id="accordion" class="mt-5">
        <div class="card">
            <div class="card-header text-center" data-toggle="tooltip" data-placement="top" tabindex="0" title="English">
                <h5><a href="#one" data-parent="#accordion" data-toggle="collapse">One</a></h5>
            </div>
            <div id="one" class="collapse hide">
                <div class="card-body">
                    Hello One
                </div>
                <div class="card-body">
                    Hello Two
                </div>
            </div>
        </div>
        <!-- Second drop-down begins here. -->
        <div class="card">
            <div class="card-header text-center" data-toggle="tooltip" data-placement="bottom" tabindex="0" title="German">
                <h5><a href="#two" data-parent="#accordion" data-toggle="collapse">Zwei</a></h5>
            </div>
            <div id="two" class="collapse hide">
                <div class="card-body">
                    Hallo Einz
                </div>
                <div class="card-body">
                    Hallo Zwei
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Collapse'
}
</script>
