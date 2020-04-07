
$(function () {
    const array = [10, 20, 30, 40, 50],
        input = $('.input'),
        input1 = $('.input1'),
        input2 = $('.input2'),
        input3 = $('.input3'),
        submit = $('.submit'),
        submit1 = $('.submit1'),
        submit2 = $('.submit2'),
        submit3 = $('.submit3'),
        filt = $('.filt'),
        redu = $('.redu'),
        maps = $('.maps'),
        inclu = $('.inclu'),
        resultSum = $('.sum'),
        resultSum1 = $('.sum1'),
        resultSum2 = $('.sum2'),
        resultSum3 = $('.sum3');
    // Click event on the Filter submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Use filter to remove numbers less than the input
            let sum = array.filter(value => value >num);
            // Display input number in explination
            filt.replaceWith(num);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
    submit1.on('click', function () {
        const val1 = input1.val();
        const num1 = parseInt(val1);
        if (!isNaN(num1)) {
             // Add our new number to the data array
            array.push(num1);
            // Use reduce to convert our array of numbers into a single value, sum of all of the numbers
            const sum1 = array.reduce((acc, curr) => acc + curr);
            // Display input number in explination
            redu.text(num1),
            // Add our new total to the page
            resultSum1.replaceWith(sum1);
            // Reset the input value to an empty string
            input1.val('');
            // Removes num1 from the array to keep it out of other methods
            array.pop(num1);
        }
    });
    submit2.on('click', function () {
        // Grab the input value and parse it into a number
        const val2 = input2.val();
        const num2 = parseInt(val2);
        // Verify the user gave us a real number
        if (!isNaN(num2)) {
            // Use map to divide our array of numbers by the input value
            const sum2 = array.map(element => element/num2);
            // Display input number in explination
            maps.replaceWith(num2),
            // Add our new total to the page
            resultSum2.text(sum2);
            // Reset the input value to an empty string
            input2.val('');
        }
    });
    submit3.on('click', function () {
        // Grab the input value and parse it into a number
        const val3 = input3.val();
        const num3 = parseInt(val3);
        // Verify the user gave us a real number
        if (!isNaN(num3)) {
            // Use includes to compare our array of numbers to the input
            let sum3 = array.includes(num3);
             // Display submitted number
            inclu.replaceWith(num3);
             // Return True or False
            resultSum3.text(sum3);
            // Reset the input value to an empty string
            input3.val('');
        }
    });
});

