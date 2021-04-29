// jQuery Doc Ready
$(function() {

  // const data = [1, 2, 3, 4],
  //   submit = $('.submit'),
  //   input = $('.input'),
  //   resultSum = $('.sum');
  // // Click event on the submit input
  // submit.on('click', function() {
  //   // Grab the input value and parse it into a number
  //   const val = input.val();
  //   const num = parseInt(val);
  //   // Verify the user gave us a real number
  //   if (!isNaN(num)) {
  //     // Add our new number to the data array
  //     data.push(num);
  //     // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
  //     const sum = data.reduce((acc, curr) => acc + curr);
  //     // Add our new total to the page
  //     resultSum.text(sum);
  //     // Reset the input value to an empty string
  //     input.val('');
  //   }
  // });


  const dataTwo = $('.inputTwo'),
    submitTwo = $('.submitTwo'),
    inputTwo = $('.inputTwo'),
    resultWord = $('.word');

  // Click event on the submit input
  submitTwo.on('click', function() {
    resultWord.text(`What does the ${dataTwo.val()} say?`);
    //use string interpolation to take the text input the user provides and build it into a string to display
  });

  // const dataThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // //use found to select the number that is true
  // const found = dataThree.find(value => value === 9),
  //   submitThree = $('.submitThree'),
  //   inputThree = $('.inputThree'),
  //   resultFound = $('.found');
  //
  // // Click event on the submit input
  // submitThree.on('click', function() {
  //   //gather user input
  //   let valThree = inputThree.val();
  //   resultFound.text(found);
  // });
  //
  // const dataFour = [14, 12, 10, 4],
  //   inputFour = $('.inputFour'),
  //   submitFour = $('.submitFour'),
  //   resultMap = $('.map');
  //
  // // Click event on the submit input
  // submitFour.on('click', function() {
  //   //map replaces for loop to return new array after grabbing user input, then parses the string to return an interger
  //   mapFour = dataFour.map(dataFour => dataFour + parseInt(inputFour.val()));
  //   //converts new array to string and shows it in an aesthetically pleasing way
  //   resultMap.text(mapFour.join(", "));
  // });

  const dataFive = [{
      name: 'banana',
      quantity: 3
    },
    {
      name: 'pea',
      quantity: 5
    },
    {
      name: 'mango',
      quantity: 2
    },
    {
      name: 'cabbage',
      quantity: 4
    },
    {
      name: 'strawberry',
      quantity: 7
    },
    {
      name: 'corn',
      quantity: 6
    }
  ];

  submitFive = $('.submitFive'),
    inputFive = $('.inputFive'),
    resultFilter = $('.filter');

  // Click event on the submit input
  submitFive.on('click', function() {
    y = dataFive.filter(produce => produce.quantity > inputFive.val()) //filter data based on user input
      .map(o => o.name) //grab name from object
      .join(" , ") //convert array to string
    resultFilter.text(y);
  });
});
