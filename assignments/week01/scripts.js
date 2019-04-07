
// Ready event runs code immediately
$(document).ready(function() {
// All other jQuery begins here

  //ES6+ Method 1: Strings
  $(function(){
    const input = $('#input1'),
      submit = $('#submit1');

    // Click event on the submit input
    submit.on('click', function() {
      let message = 'You entered:'
      console.log('${message} ${input1}');
    });
  });

  //Homework example
  $(function() {
    // Data and variables; see HTML for classes
    const data = [1, 2, 3, 4],
      input = $('.input'),
      submit = $('.submit'),
      resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function() {
      // jQuery val() method returns the value attribute
      const val = input.val();
      // JS parseInt() function parses a string and returns an integer
      const num = parseInt(val);
      // User must enter a number, otherwise nothing happens; ! = not-equal-to
      if (!isNaN(num)) {
        // Add the new number to the data array
        data.push(num);
        // Use reduce to convert our array of numbers into a single value - equal to the sum of all numbers
        const sum = data.reduce((acc, curr) => acc + curr);
        // Add our new total to the page
        resultSum.text(sum);
        // Reset the input value to nothing
        input.val('');
      }
    });
  });

});
