// jQuery Doc Ready
$(function () {
  let initial = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];
      array = $('.array');
      input = $('.input'),
      btn = input.next(),
      result = btn.next();

      // set the initial array at the top of the page
      initial.forEach(function(value, key){
        array.append(`# ${key} `);
        array.append(`the value is ${value}<br>`);
      });

      // map
      let mapDiv = $('.map');
      // clear the result if enter a new number
      mapDiv.find(input).on('keyup', function(){
        mapDiv.find(result).text(' ');
      });
        // adds user input to each # in the array
        // creates a new array
      mapDiv.find(btn).on('click', function(){
        let val = input.val();
        let mapVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(mapVal)) {
          let mapArray = initial.map(value => value + mapVal);

          // displays a new array
          mapArray.forEach(function(value, key){
            mapDiv.find(result).append(`# ${key} `);
            mapDiv.find(result).append(`the <strong>new</strong> value is ${value}<br>`);
          });
          // clears input
          input.val('');
        }
      });

      // filter
      let filterDiv = $('.filter');
      // clear the result if enter a new number
      filterDiv.find(input).on('keyup', function(){
        filterDiv.find(result).text(' ');
      });
        // filter array to any number greater than user input,
        // creates a new array
      filterDiv.find(btn).on('click', function(){
        let val = filterDiv.find(input).val();
        let filterVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(filterVal)) {
          // filter all numbers greater than user input
          let filterArray = initial.filter(value => value > filterVal);

          filterArray.forEach(function(value, key){
            filterDiv.find(result).append(`The #${key + 1} value greater than ${filterVal} is ${value}<br>`);
          });
          // clear input
          input.val('');
        }
      });

      // reduce
      let reduceDiv = $('.reduce');

      reduceDiv.find(btn).on('click', function(){
        let val = reduceDiv.find(input).val();
        let reduceVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(reduceVal)) {
          // capture length of array for new objects
          let arrayLength = initial.length;
          // add new number to existing array
          initial.push(reduceVal);
          // get the sum of the array with the new number(s) included
          let reduceSum = initial.reduce((sum, value) => sum + value);

          // update the array list at top with the added value(s)
          array.append(`# ${arrayLength} `);
          array.append(`the value is ${reduceVal}<br>`);

          // display results
          reduceDiv.find(result).text(`The sum of the array plus your addition of the number ${reduceVal} is ${reduceSum}.`);
          // clear input value
          input.val('');
        }
      });

      // find
      let findDiv = $('.find');
      // clear the result if enter a new number
      findDiv.find(input).on('keyup', function(){
        findDiv.find(result).text(' ');
      });
        // finds the next number in the array greater than user input
      findDiv.find(btn).on('click', function(){
        let val = findDiv.find(input).val();
        let findVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(findVal)) {
          // find first number greater than user input
          let found = initial.find(value => value > findVal);

          // display results
          findDiv.find(result).text(`I have found, for you, the number ${found}! This is the first number in the array that is over ${findVal}.`);

          // clear input
          input.val('');
        }
      });

      // some
      let someDiv = $('.some');
      // clear the result if enter a new number
      someDiv.find(input).on('keyup', function(){
        someDiv.find(result).text(' ');
      });
        // takes user input and finds the next number in the array greater than user input
      someDiv.find(btn).on('click', function(){
        let val = someDiv.find(input).val();
        let someVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(someVal)) {
          // get values less than user input
          let someArray = initial.filter(value => value < someVal);

          // display results
          someArray.forEach(function(value, key){
            someDiv.find(result).append(`The #${key + 1} value less than ${someVal} is ${value}<br>`);
          });
          // clear input
          input.val('');
        }
      });

      // every
      let everyDiv = $('.every');
        // will clear the new array if user goes to enter a new number
      everyDiv.find(input).on('keyup', function(){
        everyDiv.find(result).text(' ');
      });
        // takes user input and finds the next number in the array greater than user input
      everyDiv.find(btn).on('click', function(){
        let val = everyDiv.find(input).val();
        let everyVal = parseInt(val);

        //make sure entry is a number
        if (!isNaN(everyVal)) {
          // check every number in array
          let everyNum = initial.every(value => value < everyVal);

          // display result based whether or not everyNum is true
          if(everyNum) {
            everyDiv.find(result).text(`Congrats, ${everyVal} is greater than every other number in the array!`);
          } else {
            everyDiv.find(result).text(`Sorry, ${everyVal} is NOT greater than all numbers in the array!`);
          }

          // clear input
          input.val('');
        }
      });

});
