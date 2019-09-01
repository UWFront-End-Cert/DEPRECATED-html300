<template>
<div>
<div>
    <IndexHeader />
</div>

<p>This is a website for individuals to find farmers markets, which would include location, times, and offerings.  I think it is a fun idea and can be used by travelers to find a local farmers market or by a local that wants to find a farmer’s market near them.</p> <br/>
<p>This project uses the USDA’s Farmers Market Directory API.  This API “provides information about U.S. farmers market locations, directions, operating times, product offerings, and accepted forms of payment.</p><br/>
<p>The directory is one of the USDA's most popular consumer search engines and includes information about more than 7,800 farmers market listings available for all 50 states.” </p><br/>
<p>API Information: USDA National Farmers Market Directory API - https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html</p>
</div>
</template>

<script>
import Nav from '../components/Nav'
import IndexHeader from '../components/IndexHeader'

export default {
    components: {
        Nav,
        IndexHeader
    }
}

</script>
