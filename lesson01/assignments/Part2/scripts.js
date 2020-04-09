// jQuery Doc Ready
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
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 101, 102, 103],
        input = $('.input2'),
        submit = $('.submit2'),
        resultFilter = $('.filter');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            // data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const newData = data.filter(x => x < num);
            // Add our new total to the page
            resultFilter.text(newData);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});




$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input3'),
        submit = $('.submit3'),
        resultForEach = $('.forEach');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            // data.push(num);

            data.forEach((element, index, array) => {
              array[index] = element + num;
            });

            // Add our new total to the page                
            resultForEach.text(data);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input4'),
        submit = $('.submit4'),
        resultMap = $('.map');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            // data.push(num);

          const newData = data.map((element) => {
              return element * num;
            });

            // Add our new total to the page                
            resultMap.text(newData);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});
