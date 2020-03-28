// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    let data = [5, 10, 15, 20],
        submit = $('.submit');
        values = $('h3');
    // Print original array    
    values.text(values.text() + data);
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = $(this).prev().val();
        const num = parseInt(val);
        let tempText;
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // user used the map box
            if ($(this).attr("id") === "map") {
                // multiplay each value of the array by the user's value
                const tempArray = data.map(arrVal => arrVal * num);
                tempText = $(this).next().text().substring(0, 43) + tempArray;
            } else if ($(this).attr("id") === "filter") {
                // multiplay each value of the array by the user's value
                const tempArray = data.filter(arrVal => arrVal % num === 0);
                tempText = $(this).next().text().substring(0, 48) + tempArray;
            } else if ($(this).attr("id") === "every") {
                // return true if all values of the array are less than the user's value
                const tempBool = data.every(arrVal => arrVal < num);
                tempText = $(this).next().text().substring(0, 41) + tempBool;
            } else { // must be some case
                const tempBool = data.some(arrVal => arrVal === num);
                tempText = $(this).next().text().substring(0, 29) + tempBool;
            }
            // Add our new total to the page
            $(this).next().text(tempText);
            // Reset the input value to an empty string
            $(this).prev().val('');
        }
    });
});
