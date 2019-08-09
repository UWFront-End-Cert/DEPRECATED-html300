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
-	To create your project, run `vue create hello-world`
-	Follow the prompts.
- 	Once done, `cd` into the project and run `sudo npm install`, then `npm run dev` to launch the dev server.
- 	Add Bootstrap 4 to your project, you can import the packages like the article linked above, or use the `bootstrap-vue` plugin to get the bootstrap functionality in Vue without using the DOM
- 	Now, convert the 4 pages from lesson06 with the following requirements:
	-	All content must be from variables in the `<script>` part of the `.vue` page
		- 	This means the content should not be hardcoded, but set in the script and populated on the page with Vue methods
	- 	You must use at least one `v-if` `v-else` statement to change content or UI.
	- 	For the image page, use a `v-for` loop to iterate through an array of images.
	- 	For the third page, use a `v-for` to iterate through an object to fill out the content in an accordion.
	- 	Don't forget to add comments to your code explaining Bootstrap 4 classes you added and your VUE code.		
- 	**Bonus:**  Use VUE to change the CSS.  
- 	**Extra Bonus:**  Have an input box that changes the content as the user types.  

### To Submit:
- Review the requirements in the rubric on Canvas
- Create a pull request back to your forked master (not the original master), add brycebenson and ClovisI as reviewers -- create, but do not approve it!
- Submit the pull request link in the assignment submission in Canvas

