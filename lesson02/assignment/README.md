# Assignment 02 - Sass/Gulp/npm

### Required setup
- Install [Adobe XD](https://www.adobe.com/products/xd.html) (free)
- Install [node](https://nodejs.org/en/)
*A note on Node:* We have some compatibility constraints in the starter code that requires Node v10 be used locally. When you install Node on your system (necessary for all assignments and activities after this), please install version 10. There are two ways that this can be done:

    1. Download the correct version from Node files here: https://nodejs.org/dist/latest-v10.x/ The "darwin" files are for Mac, "win" for Windows.
    2. Use Node Version Manager to install and use multiple versions of Node on your system. https://github.com/nvm-sh/nvm This will be more extensible for future use, but is a little more complex to get started with.

If you've already installed a more recent version of Node locally, it should be uninstalled before installing v10.

### To get started:
-	In your forked repo, create a new branch off of master called 'lesson-02'
-   Navigate to the root folder of this assignment within terminal `lesson02/assignment/`
-   Run `npm install`
-   Run `npx gulp`
  -   Expected output from gulp is information about localhost addresses, and a browser window opening to http://localhost:3000.
  - If you instead see error output (like "primordials is not defined"), ensure you're using Node v10.
  -	If you see permissions errors, this [link](https://stackoverflow.com/questions/50258901/cannot-find-module-gulp-sass) has information that may help you resolve.
-   Leave gulp running. As you work with the files, browsersync will watch your scss and HTML files and reload the page in the browser on changes.
- Find the XD/JPG of the mockup component in the `ref` folder.
- Build the component using scss, and follow the requirements found in canvas.
- Make sure to have the image/title stack on top of the rest of the card info on mobile

### To Submit:
- Create a Pull Request for your assignment branch to your forked master
- Submit the link to your pull request in your assignment submission box
- Once assignment is graded, merge the Pull Request

#### Image source: https://unsplash.com/photos/OhKElOkQ3RE
