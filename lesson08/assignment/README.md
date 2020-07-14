# Assignment 08 - Expanded Vue Features

In the last assignment in lesson07, you converted your site to use Vue CLI scaffolding and Vue features like routing and looping over data. Now you'll refactor some of those pages to utilize components and features like mixins and slots.

These pages can be copied over to your final project later, so create them using the content (text, images) that you want in the final site.

### Vue References
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Adding Bootstrap to Vue CLI](https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
- [Bootstrap Vue](https://bootstrap-vue.js.org/docs/)

### To get started:
- Fetch from the upstream master and merge with your local master as we start each lesson
-	In your forked repo, create a new branch off of master called `lesson-08` or similar
-	Since we're starting with last assignment's code, go ahead and copy the contents of your lesson07/assignment to lesson08/assignment
-  Navigate to the root folder of the copied assignment within terminal in your fork, `lesson08/assignment`
-	Run `npm install` to install the dependencies in this new folder
- 	Now, take the previous pages and modify/add to them accordingly:
	- For the image page, convert the image markup into a separate component in its own file, be sure to import it into the corresponding 'page' component
	- The image component should have props for at least the image src, alt, & title attributes. Also use prop validation.
	- Create a mixin for the image component that should toggle on/off a border around the image on click, apply the mixin to the image component.
	-	Create a header component that uses a named slot, give a default value.
	- Don't forget to add comments to your code explaining Bootstrap 4 classes you added and your VUE code.		
- 	**Bonus:**  Use other components for existing content.    
- 	**Extra Bonus:**  Use custom directives or a modifier.   

### To Submit:
- Create a Pull Request for your assignment branch to your forked master
- Submit the link to your pull request in your assignment submission box
- Once assignment is graded, merge the Pull Request
