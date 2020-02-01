// Pop quiz
// jQuery doc ready
$(function () {
// Set up click function
  $('.myButton').click(function(){
// Set the values
    const value = $( this ).siblings().val();
    const name = $( this ).siblings().attr('id');
// Define class where results will display
    resultText = $('.result');
// Display the value of the button submitted
    resultText.append(`Your ${name} is ${value}. `);
        });
});

// Maths 1 - Reduce
// jQuery doc ready
$(function () {
// Set data and variables
    let array = [70, 29, 1],
    input = $('.input'),
    submit = $('.submit'),
// Define class where results will display
    resultMath = $('.math');
// Set up click function
    submit.on('click', function () {
// Get the input value and make it into a number
    let val = input.val();
    let num = parseInt(val);
// Verify the user gave us a real number
    if (!isNaN(num)) {
// Add the new number to the  array
    array.push(num);
// Use reduce to convert the array into a single value
    let sum = array.reduce((acc, curr) => acc + curr);
// Display value when submitted
    resultMath.text(sum).append(` (I added 100 to your number! You can keep adding more numbers to it. Go ahead.)`);
// Reset the input value to an empty string
    input.val('');
        }
    });
});

// Maths 2 - Map
// jQuery doc ready
$(function () {
// Set data
    let disarray = ["5", "9", "77"],
    input = $('.input2'),
    submit = $('.submit2');
// Define class where results will display
    resultMath2 = $('.math2');
// Set up click function
    submit.on('click', function () {
// Get the input value and make it into a number
    let val = input.val();
    let num = parseInt(val);
// Verify the user gave us a real number
    if (!isNaN(num)) {
// Add the new number to the array
    let answer = disarray.map(function(lucky) {
      return Number(val) + Number(lucky)
    });
// Display value when submitted
    resultMath2.text(answer);
// Reset the input value to an empty string
    input.val('');
        }
    });
});

// Maths 3 - Filter
// jQuery doc ready
$(function () {
// Set data
    let thisarray = ["6", "17", "187"],
    input = $('.input3'),
    submit = $('.submit3');
// Define class where results will display
    resultMath3 = $('.math3');
// Set up click function
    submit.on('click', function () {
// Get the input value and make it into a number
    let val = input.val();
    let num = parseInt(val);
// Verify the user gave us a real number
    if (!isNaN(num)) {
// Filter the array
    let panther = thisarray.filter(function(martha) {
      return Number(martha) > Number(val)
    });
// Display value when submitted
    resultMath3.text(panther);
// Reset the input value to an empty string
    input.val('');
        }
    });
});
