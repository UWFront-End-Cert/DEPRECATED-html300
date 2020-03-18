# UW Front End Certificate - HTML300
This repository contains the activities and assignments required to complete the final course of the Front End Certificate program. All assignment submissions and quizzes/discussions will be done through [Canvas](https://canvas.uw.edu/).

## Course Setup

### Optional Development Tools

These are tools that can be installed on your computer, if they look useful to you.

- [Visual Studio Code](https://code.visualstudio.com/) - Editor/IDE
- [Hyper Terminal](https://hyper.is/) - Modern Terminal
- [Adobe XD](https://www.adobe.com/products/xd.html) - Design Tool

### Initial Setup

The only tool you *must* install locally (on your computer) to get started is Node/npm. Visit [the Node homepage](https://nodejs.org/) and download the latest stable version. This will be the one labeled "Recommended for most users". Follow instructions to install it.

Npm stands for "Node Package Manager". We downloaded Node, but we won't be using it to write server-side javascript. We'll just be using npm to manage the javascript packages our projects will use. Each "activity" and "assignment" directory in this repo is a project.

We will be using npm from the terminal. When instructions say "from within a project", it means that you should navigate to a project (like "html300/lesson03/activity") before running the command.

Npm can be used to install javascript packages in a single project. This is the default behavior when `npm install package-name-here` is run. This is the way we will be using it in this course. It can also install packages on your computer (referred to as "global" installation, because they are then available outside of projects). This is done by including the `-g` flag when installing, like `npm install -g package-name-here`. We will not be using this functionality in this course.

Global installation can cause compatibility problems, and is no longer recommended. Instead, when you need to run a command to a specific Node package (as we will with Gulp), we can use the `npx` prefix. This will execute the command with the version of that package installed in the project.

#### Gulp  

We will be using Gulp as our main build tool in this course. There is no need to install it on your computer, we will only be using it with the `npx` prefix as explained above.  

After lesson01, each activity and assignment will be run by starting a Gulp task, and then visiting the URL that is made available. Gulp will pay attention to changes in your Sass and HTML files, and update what is shown in the browser when any changes are saved. It will automatically convert Sass code to CSS.

Each activity and assignment is already configured with a Gulpfile that defines the tasks. You will not need to edit these in any way. __Your interaction with Gulp will be limited to running `npx gulp` from within a project directory to start up a server.__

If you're interested, visit [Gulp's documentation](https://gulpjs.com) to learn more about how the tool works. This is strictly optional.

### Course Final Project Setup

- Create a new repository that will hold your final course project, name it something appropriate for what it will do (e.g. "WeatherTracker", "MovieGuide", etc)
- For assignment 01 you will create a `documents` folder in the root with a `.txt` or `.md` file within, containing the course proposal
- As the course progresses, work for the course final project will be done in the new repo

*The rest of these instructions are for working with this html300 repo*

### html300 Course Repo Setup
- Within *this* html300 repo, click the `fork` button the the top right to fork a copy to your personal GitHub account
- You will be taken to your forked repo, it should say 'forked fromn UWFront-End-Cert/html300' under the title
- Clone the fork to your local machine

### Adding the Upstream to your Fork
- Navigate to your fork's root folder in terminal (e.g. `cd ~/Sites/uw/html300`)
- Make sure you are on your master branch, `git checkout master`
- Add the upstream repository as a remote connection `git remote add upstream git@github.com:UWFront-End-Cert/html300.git`
- Verify with `git remote -v`, should have both `origin` and `upstream`
- REMINDER: you will only ever push to `origin`, as that's your fork. Only fetching and pulling will work with `upstream`.

### Fetching and Merging Upstream
- To keep your fork in sync with any changes to the original, we can use upstream to fetch and merge with our forks
- THIS ONLY NEEDS TO BE DONE ONCE A WEEK OR WHEN YOUR INSTRUCTOR SUGGESTS TO
- Run `git fetch upstream` to get the latest code from all branches
- Now make sure you're on master with `git checkout master`
- Now merge the upstream version of master with your fork's by running `git merge upstream/master`
- You shouldn't run into conflicts, but if you get errors or conflicts, you can work this guide to resolve or talk to your instructor for help https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line

## Per Lesson Workflow
- Start by checking out your local master branch and fetching/merging upstream at the beginning of each lesson module so you know you're up to date
- From the master branch, create a branch for the lesson's assignment. Keep these branches all named consistently, like "lesson1", "lesson2", etc.
```
# Fetch and merge upstream master to your local master branch
$ git checkout master
$ git fetch upstream
$ git merge upstream/master
# From the master branch, create the branch for the lesson's assignment
$ git checkout -b lesson3
```
- Each lesson will usually have two folders, `activity` and `assignment`. Feel free to work on the activity  and assignment on the same "lessonX" branch
- The `activity` will often have `starter` and `solution` folders, this is to help illustrate the starting/ending point for each
- The `assignment` folder will have the starter files and instructions required to complete
- Once completed, open a new Pull Request. Within the PR, set the base to be YOUR forked master branch, and the compare branch is  that lesson's assignment branch
- Copy the direct link to the pull request page, and paste that into the submission box in Canvas

### Assignments
- Check the `README.md` files found in the root of each `assignment` folder for instructions, links for tools, and any required information. Consult the rubric within Canvas for the grading scale breakdown
- When you open a pull request, you may keep pushing commits to that assignment's branch as they will automatically update the PR -- no need to close and re-open a new one
- Please use the Canvas discussion boards if coming across issues or problems with assignments so all folks have visibility

### Quizzes
- Each week there will be a quiz available to take, please flag up any issues if questions aren't being assessed correctly

### Resources: Libraries

These are libraries that will be used in assignments and activities. When you're ready, use these links to documentation to learn more about them.

- [NodeJS/npm](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Sass](https://sass-lang.com/documentation)
- [Bootstrap 4](https://getbootstrap.com/)
- [Vue](https://vuejs.org/)
- [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Nuxt](https://nuxtjs.org/)

### Other Resources

- [Git Resources](https://try.github.io/)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US)
- [Exploring ES6](https://exploringjs.com/es6/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Array Explorer](https://sdras.github.io/array-explorer/)
- [Object Explorer](https://sdras.github.io/object-explorer/)
- [Sass Guide](https://sass-lang.com/guide)
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://codepip.com/games/grid-garden/)
- [Syntax FM Podcast](https://syntax.fm/)
- [ShopTalk Show Podcast](https://shoptalkshow.com/)
