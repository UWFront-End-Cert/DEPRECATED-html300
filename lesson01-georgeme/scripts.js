$(function () {
// Creating variables with data values
    const numbers = [16, 32, 64, 128],
        inputConst = $('.reduceInput'),
        submitConst = $('.reduceSubmit'),
        resultSum = $('.sum');
// Event when clicking submit
      submitConst.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConst.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, adding to the total of the array numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// "Reducing" the entire total of the numbers in the array + the user entered number to one value
          const sum = numbers.reduce((arr, user) => arr + user);
// Adding the new total value (sum) to the text on the HTML page
          resultSum.text(sum);
          input.val('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});
