

// Ready event runs code immediately
$(document).ready(function() {
// All other jQuery begins here
  array = [10, 20, 50, 100, 1000];

  //Method 1 - filter
  $('#submit1').click(function() {
    // Assign a variable to the user input
    let input = $('#input1');
    // Not sure why this is needed, but it works -- jQuery val() method returns the value attribute
    let val = input.val();
    // Use filter with user input
    let results = array.filter(function(numbers){
      return numbers > val;
    });
    console.log(results);
    $('#container1').html('<span>Result: </span>' + results);
  });

  //Method 2 - find
  $('#submit2').click(function() {
    // Assign a variable to the user input
    let input = $('#input2');
    // Not sure why this is needed, but it works -- jQuery val() method returns the value attribute
    let val = input.val();
    // Use find with user input
    let results = array.find(function(numbers){
      return numbers > val;
    });
    console.log(results);
    $('#container2').html('<span>Result: </span>' + results);
  });
  //Method 3 - map
  $('#submit3').click(function() {
    // Assign a variable to the user input
    let input = $('#input3');
    // Not sure why this is needed, but it works -- jQuery val() method returns the value attribute
    let val = input.val();
    // Use map with user input
    let results = array.some(function(numbers){
      let division = numbers/val;
      let val = division.val()
      return (val);
    });
    console.log(results);
    $('#container3').html('<span>Result: </span>' + results);
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
