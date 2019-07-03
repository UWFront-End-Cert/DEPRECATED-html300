// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1.1],
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
          // Use reduce to convert our array of numbers into a single value - the total of all of the numbers
          const sum = Math.floor(data.reduce((value, ten) => value * ten));
          // Add our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          data.pop(num);
        }
    });

    // Set up some data and variables
    const data2 = [1.2],
        input2 = $('.input_2'),
        submit2 = $('.submit_2'),
        resultSum2 = $('.sum_2');
    // Click event on the submit input
    submit2.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input2.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data2.push(num);
          // Use reduce to convert our array of numbers into a single value - the total of all of the numbers
          const sum = Math.floor(data2.reduce((value, tw) => value * tw));
          // Add our new total to the page
          resultSum2.text(sum);
          // Reset the input value to nothing
          data2.pop(num);
        }
    });
    // Set up some data and variables
    const data3 = [1.3],
        input3 = $('.input_3'),
        submit3 = $('.submit_3'),
        resultSum3 = $('.sum_3');
    // Click event on the submit input
    submit3.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input3.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data3.push(num);
          // Use reduce to convert our array of numbers into a single value - the total of all of the numbers
          const sum = Math.floor(data3.reduce((value, thr) => value * thr));
          // Add our new total to the page
          resultSum3.text(sum);
          // Reset the input value to nothing
          data3.pop(num);
        }
    });
    // Set up some data and variables
    const data4 = [1.4],
        input4 = $('.input_4'),
        submit4 = $('.submit_4'),
        resultSum4 = $('.sum_4');
    // Click event on the submit input
    submit4.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input4.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data4.push(num);
          // Use reduce to convert our array of numbers into a single value - the total of all of the numbers
          const sum = Math.floor(data4.reduce((value, four) => value * four));
          // Add our new total to the page
          resultSum4.text(sum);
          // Reset the input value to nothing
          data4.pop(num);
        }
    });
});

