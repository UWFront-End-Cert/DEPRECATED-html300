# Assignment 09 - APIs and Course Project

We'll spend our final couple weeks working on the final project, so this will act as the final project rubric. We'll be using Nuxt, so please watch the video on Nuxt for a walkthrough of starting up a new project. Nuxt is very similar to Vue CLI, and we'll be able to deploy the course projects for free on Netlify automatically.

### Vue References
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Nuxt](https://nuxtjs.org/guide/installation)
- [Axios](https://github.com/axios/axios)
- [Axios & Vue](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Bootstrap Vue](https://bootstrap-vue.js.org/docs/)

### To get migrated:
-	Watch the video on Nuxt to learn more about the framework
-	Verify `yarn` is installed by running `yarn -v` in your terminal to see if a version comes back 
-	We are now using the course project repo we created in lesson01
	-	In that repo, run `yarn create nuxt-app my-project-title`
	-	You may adjust the name, description, and package manager
	-	You can add Bootstrap Vue here or any other CSS framework you'd want to use when prompted
	-	Choose `none` for server framework
	-	Use spacebar to select Axios, you can add PWA support if desired as well
	-	You may add the linters if you'd like, but they are more advanced and can give you 'errors' if you break the rules
	-	Choose `none` for testing
	-	Choose Universal
	-	The install will begin
	-	`cd` into your newly created project directory
	- 	Run `yarn add node-sass sass-loader` to add sass
		-	Use scss by adding `lang="scss"` to your template `<style>` tags as well as globally with the `main.scss` process we used for bootstrap in the CLI
	-	Run `yarn dev` to start the local server
-	With your newly created Nuxt app, start migrating over your Vue template files and assets from the Vue CLI project to their respective spots. Basically any content in the 'App.vue' file now goes in the `layouts/default.vue`, The `<nuxt />` tag acts like the `<router-view />`.
-	For internal links, now use `<nuxt-link>` components.
-	Migrate any views/page components to the `pages` directory. You can create folder structures, or have an `index.vue` file within a folder that will generate the route to the folder's name (i.e. `about/index.vue` shows up in the browser at `/about`).
-	Routes are generated based on the pages file structure, don't worry about a router file.
-	Migrate any components or additional assets
-	Add any additional packages you are using

### Additional items:
-	Add in your API data, you may use this on various components or pages, but at least:
	-	1 instance of pulling API data
	-	With that returned data, build a corresponding component and use v-for to loop over the data
	-	That component should have props validation as well as use at least 4 data points in the template itself (heading, description, image, statistics, etc)
	-	The component should have some sort of method that causes a UI interaction on that instance of the component (show/hide, change the CSS, animation, etc)
-	Your site should have at least 4 pages (including the home) with `<nuxt-link>` used to navigate between them in your nav
-	Feel free to reuse as much as you've been building/working on or expand and modify it as you'd like
- 	Deploy to Netlify (watch for upcoming screencast with step-by-step process)		
- 	**Bonus:**  Create UI interactions to modify/interact with your API data   
- 	**Extra Bonus:**  Create dynamic routing with your data through components with single pages 
-	**Super Extra Bonus:** Point a custom domain to your site

### To Submit:
- 	Review the requirements in the rubric on Canvas
- 	Submit the link to your course project repo as well as the live site's Netlify link in Canvas