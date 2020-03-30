// jQuery Doc Ready
$(function () {
	// Set up some data and variables
	const data = [18, 2, 3, 4],
		input = $('.input'),
		submit = $('.submit'),
		resultSum = $('.sum'), //reduce example
		result1 = $('.power'), //map
		result2 = $('.power2'), //foreach
		result3 = $('.smallmore3'), //find sort
		result4 = $('.even'), //filter
		result5 = $('.multiply'), //reduce
		result6 = $('.lessthan3'), //filter length
		result7 = $('.fib');


	// Click event on the submit input
	submit.on('click', function () {
		// Grab the input value and parse it into a number
		const val = $(this).siblings().val();
		const num = parseInt(val);
		// Verify the user gave us a real number
		if (!isNaN(num)) {
			// Add our new number to the data array
			data.push(num);
			// Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
			if ($(this).parents().hasClass("uw")) {
				const sum = data.reduce((acc, curr) => acc + curr);
				// Add our new total to the page
				resultSum.text(sum);
				console.log(data);
			}
			// Use map to return array of squared numbers
			if ($(this).parents().hasClass("b1")) {
				const power = data.map((val) => {
					return val * val;
				});
				// Add our new values to the page
				//result1.text(power);
				result1.text(`(using map) The squared values of each element in the new array is: ${power}`);

				console.log(data);
			}
			// Use for each to return array of squared numbers
			if ($(this).parents().hasClass("b2")) {
				const power2 = [];
				data.forEach(function (item) {
					power2.push(item * item);
				});
				// Add our new values to the page
				result2.text(`(using foreach) The squared values of each element in the new array is: ${power2}`);
				console.log(data);
			}

			// use sort and find to find first value (smallest value) in array that is larger than 3
			if ($(this).parents().hasClass("b3")) {
				function smallesmorethan3(array, what) {
					array2 = array.sort(function (a, b) {
						return parseInt(a) - parseInt(b);
					});
					return array2.find(item => item > what);
				}
				const smallmore3 = smallesmorethan3(data.sort(), 3);
				// Add our new total to the page
				result3.text(`The smallest number in the new array that is larger than 3 is:  ${smallmore3}`);
				console.log(data);
			}

			// Use filter to get all the even numbers in the array then use length to return the count of even numbers
			if ($(this).parents().hasClass("b4")) {
				const even = data.filter(val => {
					return val % 2 === 0;
				});
				// Add our new total to the page
				result4.text(`The number of values that are even in the new array is:   ${even.length}`);
				console.log(data);
			};

			// Use reduce to convert our array of numbers into a single value - the product of all the numbers
			if ($(this).parents().hasClass("b5")) {
				const multiply = data.reduce((acc, curr) => acc * curr);
				// Add our new total to the page
				result5.text(`The product of the new array is:  ${multiply}`);
				console.log(data);
			}

			// Use filter and length to count how many values are less than 3 in the new array
			if ($(this).parents().hasClass("b6")) {
				function countInArray(array, what) {
					return array.filter(item => item < what).length;
				}
				const lessthan3 = countInArray(data, 3);
				// Add our new total to the page
				result6.text(`The number of values less than 3 in the new array is: ${lessthan3}`);
				console.log(data);
			}

			if ($(this).parents().hasClass("b7")) {

				var fibonacci_series = function (n) {
					if (n === 0) {
						return [0];
					}
					if (n === 1) {
						return [0, 1];
					} else {
						var s = fibonacci_series(n - 1);
						s.push(s[s.length - 1] + s[s.length - 2]);
						return s;
					}
				};

				const fib = fibonacci_series(num)[num];
				result7.text(`The fibonnacci value for the given index (0 indexed) is:  ${fib}`);
				data.pop(); //dont add fib. index to the array
				console.log(data);

			}

			// Reset the input value to an empty string
			input.val('');
		}
	});
});