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
// Checking if a number is entered and if so, including it in the array of numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// Review the numbers (including the user input) to see if every number is over 62
          const listEvery = numbers.every(function(val) {
            return val > 62;
          });
// Based on number input and those already in the array, provide a true/false result on the HTML page
          resultEv.text(listEvery);
          input.valEvery('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});


// Function for Some
$(function () {
// Creating variables with data values
    const numbers = [50, 48, 77, 65],
        inputConstSome = $('.someInput'),
        submitConstSome = $('.someSubmit'),
        resultSome = $('.some');
// Event when clicking submit
      submitConstSome.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConstSome.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, including it in the array of numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// Review the numbers (including the user input) to see if some number is over 100
          const listSome = numbers.some(function(val) {
            return val > 100;
          });
// Based on number input and those already in the array, provide a true/false result on the HTML page
          resultSome.text(listSome);
          input.valSome('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});


// Function for Filter
$(function () {
// Creating variables with data values
    const numbers = [33, 66, 99, 150, 263],
        inputConstFilt = $('.filterInput'),
        submitConstFilt = $('.filterSubmit'),
        resultFilter = $('.filter');
// Event when clicking submit
      submitConstFilt.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConstFilt.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, including it in the array of numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// Review the numbers (including the user input) to see if any of the numbers are less than 98
          const listFilter = numbers.filter(function(val) {
            return val < 98;
          });
// Display all numbers (from array and user entry) that are less than 98
          resultFilter.text(listFilter);
          input.valSome('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});


// Function for Map
$(function () {
// Creating variables with data values
    const numbers = [15, 32, 27, 16, 84, 97, 215],
        inputConstMap = $('.mapInput'),
        submitConstMap = $('.mapSubmit'),
        resultMap = $('.map');
// Event when clicking submit
      submitConstMap.on('click', function () {
// ParseInt takes the string value and makes it a number
        const val = inputConstMap.val();
        const num = parseInt(val);
// Checking if a number is entered and if so, including it in the array of numbers (using push)
        if (!isNaN(num)) {
          numbers.push(num);
// Review the numbers (including the user input) and add 10 to each
          const listMap = numbers.map(function(val) {
            return val + 10;
          });
// Display all new numbers from array and user entry after adding 10
          resultMap.text(listMap);
          input.valSome('');
// Creating an alert if a NaN is entered
        } else {
          alert("Not a number! You must enter only numeric values.");
        }
    });
});
