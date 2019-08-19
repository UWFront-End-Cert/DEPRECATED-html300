# Activity 09 - API Fetching with Axios & Nuxt

We will be using Nuxt and Axios to pull from an API and populate a page with Card components using dynamic data.

### Vue References
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Nuxt](https://nuxtjs.org/guide/installation)
- [Axios](https://github.com/axios/axios)
- [Axios & Vue](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### To get started:
-	 Watch the video on Nuxt to learn more about the framework, but for this activity you'll only need to work in two files.
-	 Verify `yarn` is installed by running `yarn -v` in your terminal to see if a version comes back
-	 Run `yarn` to install, verify packages installed successfully
-	 Run `yarn dev` to launch the local server
-	 Use Axios to fetch data from the [restcountries.eu](https://restcountries.eu/#api-endpoints-region) endpoint
-	 Americas was used in the video, try Europe `https://restcountries.eu/rest/v2/region/europe`
-	 Create a Card component that includes the country's flag with alt/src, a heading with the country's name, and a p with the subregion.
-	 Import the Card into your `pages/index.vue` file and create a v-for loop to print each country  


> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

