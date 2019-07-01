// Function for Reduce
$(function () {
// Creating variables with data values
    const numbers = [16, 32, 64, 128],
        inputConstRed = $('.reduceInput'),
        submitConstRed = $('.reduceSubmit'),
        resultSum = $('.sum');
// Event when clicking submit
      submitConstRed.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConstRed.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, adding to the total of the array numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// "Reducing" the entire total of the numbers in the array + the user entered number to one value
          const sumReduce = numbers.reduce((arr, user) => arr + user);
// Adding the new total value (sum) to the text on the HTML page
          resultSum.text(sumReduce);
          input.valReduce('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});


// Function for Every
$(function () {
// Creating variables with data values
    const numbers = [77, 89, 101, 250],
        inputConstEv = $('.everyInput'),
        submitConstEv = $('.everySubmit'),
        resultEv = $('.every');
// Event when clicking submit
      submitConstEv.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConstEv.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, adding to the total of the array numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// "Reducing" the entire total of the numbers in the array + the user entered number to one value
          const listEvery = numbers.every(function(val) {
            return val > 62;
          });
// Adding the new total value (sum) to the text on the HTML page
          resultEv.text(listEvery);
          input.valReduce('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});
