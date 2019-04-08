// Code for map function
$(function () {
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
          // Use map to multiply all the numbers in the array by 2 and create a new array
          const sum = data.map(x => x * 2);
          // Add our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});

// Code for filter function
$(function () {
    // Set up some data and variables
    const values = [3, 6, 9, 12],
        inputFilter = $('.input-filter'),
        submitFilter = $('.submit-filter'),
        resultSumFilter = $('.sum-filter');
    // Click event on the submit input
    submitFilter.on('click', function () {
        // Grab the input value and parse it into a number
        const val = inputFilter.val();
        const num1 = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num1)) {
          // Add our new number to the data array
          values.push(num1);
          // Use map to multiply all the numbers in the array by 2 and create a new array
          const sumFilter = values.filter(x => x % 2 == 0);
          // Add our new total to the page
          resultSumFilter.text(sumFilter);
          // Reset the input value to nothing
          inputFilter.val('');
        }
    });
});

// Code for sort function
$(function () {
    // Set up some data and variables
    const valuesSort = [1, 2, 3, 4],
        inputSort = $('.input-sort'),
        submitSort = $('.submit-sort'),
        resultSumSort = $('.sum-sort');
    // Click event on the submit input
    submitSort.on('click', function () {
        // Grab the input value and parse it into a number
        const val = inputSort.val();
        const num2 = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num2)) {
          // Add our new number to the data array
          valuesSort.push(num2);
          // Use map to multiply all the numbers in the array by 2 and create a new array
          const sumFilter = valuesSort.sort((a, b) => a - b);
          // Add our new total to the page
          resultSumSort.text(sumFilter);
          // Reset the input value to nothing
          inputSort.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const fellowship = ['frodo', 'samwise', 'merry', 'pippin', 'aragorn', 'gandalf', 'boromir', 'gimli', 'legolas'],
        input = $('.input'),
        submit = $('.submit'),
        resultMember = $('.member');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value
        const valMember = input.val();
        // Use includes to see if input value is included in array
          const member = fellowship.includes(valMember);
          // Output true or false depending on result
          resultMember.text(member);
          // Reset the input value to nothing
          input.val('');
    });
});
