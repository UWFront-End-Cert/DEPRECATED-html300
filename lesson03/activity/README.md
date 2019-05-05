# Constructor Activity
### Run `npm install` to install, then `gulp` to launch your local server
In `index.js`, do the following:
* Create a constructor function for `Dog` using the ES6 `class` syntax
* This function should have properties for the `dog`’s `name`, `age`, `breed`, `color`, `barkLevel`, `energyLevel`, and a `pat` method.​
* The `name`, `breed`, and `color` should be strings the levels are numbers​
* `barkLevel` begins at `10`, `energyLevel` begins at `0`
* In the `pat` method, increase `energyLevel` and decrease the `barkLevel` by one for each `pat​`
* Log out to the `console` a message when `pat` is invoked, telling us the `dog`’s `name`, `age` and current `bark`/`energy` levels.
* Create a new `dog`, passing in the needed parameters
* Use the `pat` method on your newly created `dog` 5 times