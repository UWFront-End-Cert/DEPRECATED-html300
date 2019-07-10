# UW Front End Certificate - HTML300
This repository contains the activities and assignments required to complete the final course of the Front End Certificate program. All assignment submissions and quizzes/discussions will be done through [Canvas](https://canvas.uw.edu/).

## Course Setup
Follow these steps to get your initial setup started

### Recommended Tools
- [Visual Studio Code](https://code.visualstudio.com/) - Editor/IDE
- [Hyper Terminal](https://hyper.is/) - Modern Terminal
- [Oh My Zsh](https://ohmyz.sh/) - Zsh framework
- [Adobe XD](https://www.adobe.com/products/xd.html) - Design Tool

### Required Tools (by end of course)
- [NodeJS/npm](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Sass](https://sass-lang.com/documentation)
- [Bootstrap 4](https://getbootstrap.com/)
- [Vue](https://vuejs.org/)
- [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Nuxt](https://nuxtjs.org/)


### Course Final Project Setup
- Create a new repository that will hold your final course project, name it whatever you'd like
- In this repo, click on the `Settings` tab at the top right, then the `Collaborators` tab on the left. Search for `brycebenson` and `ClovisI` to add as collaborators
- For assignment 01 you will create a `documents` folder in the root with a `.txt` or `.md` file within, containing the course proposal
- As the course progresses, work for the course final will be done/migrated here

### Course Repo Fork Setup
- Within this html300 repo, click the `fork` button the the top right to fork a copy to your personal GitHub
- You will be taken to your forked repo, it should say 'forked from...' under the title
- In your newly created fork, click on the `Settings` tab at the top right, then the `Collaborators` tab on the left. Search for `brycebenson` and `ClovisI` to add as collaborators
- Clone the fork to your local machine

### Adding the Upstream to your Fork
- Navigate to your fork's root folder in terminal (e.g. `cd ~/Sites/uw/html300`) 
- Make sure you are on your master branch, `git checkout master`
- Run `git remote add upstream git@github.com:UWFront-End-Cert/html300.git`
- Verify with `git remote -v`, should have both `origin` and `upstream`

### Fetching and Merging Upstream
- To keep your fork in sync with any changes to the original, we'll use upstream to fetch and merge with our forks
- Run `git fetch upstream` to get the latest code from all branches
- Now make sure you're on master with `git checkout master`
- Now merge the upstream version of master with your fork's by running `git merge upstream/master`
- You shouldn't run into conflicts, but if you get errors or conflicts, run `git status` to see which files need to be updated, and using `git add --all` after resolved to add them to be staged

## Weekly Workflow
- Start by checking out your local master branch and fetching/merging upstream at the beginning of each module so you know you're up to date
- Create a branch for your week's assignment. You can create and checkout a new branch with `git checkout -b branch-name`
- Each lesson will usually have two folders, `activity` and `assignment`. Feel free to work on the activity within your assignment branch
- The `activity` will often have `starter` and `solution` folders, this is to help illustrate the starting/ending point for each
- The `assignment` folder will have the starter files and instructions required to complete
- Once completed, open a new Pull Request. Within the PR, set the base to be YOUR forked master branch, and the compare branch is whatever that week's assignment branch is
- In the Reviewer's section, click into the box and add `brycebenson` and `ClovisI` as reviewers - note you will have needed to invite us as collaborators to your fork first
- Now, do NOT merge or close the Pull Request -- just add us as reviewers 
- Copy the direct link to the pull request page, and paste that into the submission box in Canvas

### Assignments
- Check the `README.md` files found in the root of each `assignment` folder for instructions, links for tools, and any required information. Consult the rubric within Canvas for the grading scale breakdown
- When you open a pull request, you may keep pushing commits to that assignment's branch as they will automatically update the PR -- no need to close and re-open a new one
- Please use the Canvas discussion boards if coming across issues or problems with assignments so all folks have visibility

### Quizzes
- Each week there will be a quiz available to take, please flag up any issues if questions aren't being assessed correctly

### Resources
- [Git Resources](https://try.github.io/)
- [Learn Branching](https://learngitbranching.js.org/?locale=en_US)
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