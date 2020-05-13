// // jQuery Doc Ready
$(function() {
  const data = [1, 2, 3, 4],
    input = $('.input'),
    submit = $('.submit'),
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


  let dataThree = $('.inputTwo');
    inputTwo = $('.inputTwo'),
    submitTwo = $('.submitTwo'),
    resultWord = $('.word');

  submitTwo.on('click', function() {
    resultWord.text(`What does the ${dataThree.val()} say?`);
  });
});

  // let dataThree = [9, 10, 11, 12];
  // let found =
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
//
// Use string template literals for the output and use arrow functions.
// Integrate two more ES6+ functions.
