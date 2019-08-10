# Assignment 07 - Vue CLI

In the last assignment in lesson06, you created a responsive website with Bootstrap 4. In this assignment, you'll convert those pages and build them with Vue CLI.

### Vue References
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Adding Bootstrap to Vue CLI](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
- [Bootstrap Vue](https://bootstrap-vue.js.org/docs/)

### To get started:
- 	Fetch from the upstream master and merge with your local master as we start each lesson
-	In your forked repo, create a new branch called `lesson-07` or something like that for the week
-   Navigate to the root folder of this assignment within terminal in your fork, `lesson07/assignment`
- 	Install the Vue CLI if you haven't already with `npm install -g @vue/cli`
	- 	If installed correctly, running `vue --version` should return a number
-	To create your project using Vue CLI v2, 
	-	run `vue init webpack my-title`
	-	Follow the prompts:
		-	Choose 1st option for Vue build (Runtime + Compiler)
		-	Enter `Y` for the router prompt 
		-	Enter `n` for lint and tests
		-	Select npm or yarn (your choice, but yarn would need to be installed first)
	-	Once done, `cd` into your project
	- 	Installing scss (in your project directory)
		-	npm command: run `npm install -D sass-loader sass`
		-	yarn command: run `yarn add sass-loader sass`
	-	Installing Bootstrap (in your project directory)
		-	npm command: run `npm install bootstrap-vue bootstrap jquery popper.js`
		-	yarn command: run `yarn add bootstrap-vue bootstrap jquery popper.js`	
	-	Adding bootstrap/scss to the project
		-	In your `src` folder, create a `main.scss` file
		-	In that new file, add the following:
			```
			@import 'node_modules/bootstrap/scss/bootstrap';
			@import 'node_modules/bootstrap-vue/src/index.scss';
			```
		-	You can create & import partials into this file or add additional global styles using scss
		-	Also in your `src` folder, open `main.js` and add the following under the router import:
			```
			import 'bootstrap'
			import BootstrapVue from 'bootstrap-vue'
			import './main.scss'

			Vue.use(BootstrapVue)
			```
		-	You now have access to scss and all of bootstrap/bootstrap-vue. Watch the screencast for more information on using bootstrap-vue components and bootstrap features in Vue, as well as turning the bootstrap nav into an app router
	-	To run the project, `cd` into your project and run `npm run dev` or `yarn dev` to launch the server

-	To create your project using Vue CLI v3, 
	-	run `vue create my-title`
	-	Choose 1st option (default)
	-	Once done, `cd` into your project
	-	run `vue add router`
		-	Select `Y` for history
		-	You'll see the router files were generated for you
	- 	Installing scss (in your project directory)
		-	npm command: run `npm install -D sass-loader sass`
		-	yarn command: run `yarn add sass-loader sass`
	-	Installing Bootstrap (in your project directory)
		-	npm command: run `npm install bootstrap-vue bootstrap jquery popper.js`
		-	yarn command: run `yarn add bootstrap-vue bootstrap jquery popper.js`	
	-	Adding bootstrap/scss to the project
		-	In your `src` folder, create a `main.scss` file
		-	In that new file, add the following:
			```
			@import 'node_modules/bootstrap/scss/bootstrap';
			@import 'node_modules/bootstrap-vue/src/index.scss';
			```
		-	You can create & import partials into this file or add additional global styles using scss
		-	Also in your `src` folder, open `main.js` and add the following under the router import:
			```
			import 'bootstrap'
			import BootstrapVue from 'bootstrap-vue'
			import './main.scss'

			Vue.use(BootstrapVue)
			```
		-	You now have access to scss and all of bootstrap/bootstrap-vue. Watch the screencast for more information on using bootstrap-vue components and bootstrap features in Vue, as well as turning the bootstrap nav into an app router
	-	To run the project, `cd` into your project and run `npm run serve` or `yarn serve` to launch the server
	
- 	Now, convert the 4 pages (as components, then set paths in your router to those imported components) from lesson06 with the following requirements:
	-	All repeated content must be from variables in the `<script>` part of the `.vue` page (the `v-for` stuff)
		- 	This means the content should not be hardcoded, but set in the script and populated on the page with Vue methods
	- 	You must use at least one `v-if` `v-else` statement to change content or UI.
	- 	For the image page, use a `v-for` loop to iterate through an array of images.
	- 	For the third page, use a `v-for` to iterate through an object to fill out the content in an accordion.
	-	Use of Vue router to navigate component pages
	- 	Don't forget to add comments to your code explaining Bootstrap 4 classes you added and your VUE code.		
- 	**Bonus:**  Use VUE to change the CSS.  
- 	**Extra Bonus:**  Have an input box that changes the content as the user types.  

### To Submit:
- Review the requirements in the rubric on Canvas
- Create a pull request back to your forked master (not the original master), add brycebenson and ClovisI as reviewers -- create, but do not approve it!
- Submit the pull request link in the assignment submission in Canvas

