// jQuery Doc Ready
/* $(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function () {
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
});
// Here are all the function that I am planning to use.
/* myArray = [2, 4, 6, 8, 10]

/* let results = myArray.every(value => value > 2 );
    console.log(results); */

 /* let results = myArray.find(value => value > 4);
  console.log(results); */

// or bellow

/* let results = myArray.find(function(value) {
    return value > 4;
  });
  console.log(results) */

  /* let results = myArray.reduce(function(sum, value){
      return sum + value;
    });
    console.log(results); */

  /* let results = myArray.map(function(value) {
     return value + 15;
   });
   console.log(results); */

  /* let results = myArray.filter(function(value) {
    return value > 2;
  });
  console.log(results) */
