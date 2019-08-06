# Activity 07 - Vue Forms

We will converting the previous jQuery form to a Vue one using Vue CLI. 

### Bootstrap/Vue References
- [Bootstrap Docs](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Bootstrap Forms](https://getbootstrap.com/docs/4.0/components/forms/)
- [Bootstrap with Sass](https://getbootstrap.com/docs/4.3/getting-started/theming/#sass)
- [Bootstrap Tooltips](https://getbootstrap.com/docs/4.3/components/tooltips/)
- [Vue Docs](https://vuejs.org/v2/guide/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)


#### Review the Vue videos in Lesson07 in Canvas

### To get started:
-	Start with the completed activity code from lesson06
- 	Install the Vue CLI if you haven't already with `npm install -g @vue/cli`
	- 	If installed correctly, running `vue --version` should return a number
-	To create your project, run `vue create project-name`
-	Follow the prompts.
- 	Once done, `cd` into the project and run `sudo npm install`, then `npm run dev` to launch the dev server.
- 	Convert the previous form to use Vue features as much as possible
-	You'll need to add bootstrap for the tooltips
-	Use Vue for all interactions of the form as much as possible
-	For reference, here are the previous requirements:
	- 	In the form, create two buttons
		- One says "click me"
		- The other says "submit"
	- 	The submit button should be greyed out and unclickable (the form should not submit).
	- 	When you hover over the submit button, a tooltip should appear letting the user know to click the other button.
	- 	Once the user clicks on the other button, the submit button should no longer be greyed out; the button should be clickable (the form will submit), and a tooltip should not show when you hover over it.