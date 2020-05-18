// // jQuery Doc Ready
$(function() {

  const data = [1, 2, 3, 4],
    submit = $('.submit'),
    input = $('.input'),
    resultSum = $('.sum');
  // Click event on the submit input
  submit.on('click', function() {
    // Grab the input value and parse it into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Add our new number to the data array
      data.push(num);
      // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
      const sum = data.reduce((acc, curr) => acc + curr);
      // Add our new total to the page
      resultSum.text(sum);
      // Reset the input value to an empty string
      input.val('');
    }
  });


  const dataTwo = $('.inputTwo'),
    submitTwo = $('.submitTwo'),
    inputTwo = $('.inputTwo'),
    resultWord = $('.word');

  submitTwo.on('click', function() {
    resultWord.text(`What does the ${dataTwo.val()} say?`);
  });

  const dataThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const found = dataThree.find(value => value === 9),
  x = $('.x'),
  inputThree = $('.inputThree'),
  resultFound = $('.found');

  x.on('click', function() {
    let valThree = inputThree.val();
    resultFound.text(found);
  });

  const dataFour = [12, 10, 14, 4],
  inputFour = $('.inputFour'),
  submitFour = $('.submitFour'),
  resultMap = $('.map');

  submitFour.on('click', function() {
    mapFour = dataFour.map(dataFour => dataFour + parseInt(inputFour.val()));
  resultMap.text(mapFour.join(", "));
  });

    const produce = ['banana', 'strawberry', 'mango', 'pea', 'cabbage', 'corn'],
  submitFive = $('.submitFive'),
  inputFive = $('.inputFive'),
  resultFilter = $('.produce');

  submitFive.on('click', function() {
    others = produce.filter(others => others.fruit);
    console.log(others);
    // resultFilter.text(others);
  });
});



//
// The goal of this assignment is to use ES6+ with a  front-end framework, and you already know how to use one, jQuery.
//
// Create at least sets of 4 input boxes. Each box should have a button the user can press.
// Use jQuery and ES6+ to manipulate the data from those input boxes and ouput the result withan explantation.
// Use at least 4 ES6+ methods.
//
// Remember it's best practice to add comments to your code.
// Don't worry about validating data. Only number will be added in the input box.
//
// Optional Bonus: If you have completed the requirements above and are up for an extra challenge, you can take your project to the next level with following bonus activities.
// PERHAPS CALCULATE TAX BASED ON USER LOCATION
// Use string template literals for the output and use arrow functions.
// Integrate two more ES6+ functions.
