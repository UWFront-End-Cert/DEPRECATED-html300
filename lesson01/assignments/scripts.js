// jQuery Doc Ready
$(function () {
  let initial = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];
      array = $('.array');
      input = $('.input'),
      btn = input.next(),
      result = btn.next(),
      initial.forEach(function(value, key){
        array.append(`# ${key} `);
        array.append(`the value is ${value}<br>`);
      });

      // map
        // will clear the new array if user goes to enter a new number
      $('.map .input').on('keyup', function(){
        $('.map .markup').text(' ');
      });
        // takes user input and adds it to each # in the array,
        // creates a new array
      $('.map .submit').on('click', function(){
        let val = $('.map .input').val();
        let mapVal = parseInt(val);
        let mapArray = initial.map(value => value + mapVal);

        console.log(mapArray);

        mapArray.forEach(function(value, key){
          $('.map .markup').append(`# ${key} `);
          $('.map .markup').append(`the <strong>new</strong> value is ${value}<br>`);
        });
        input.val('');
      });

      // filter
        // will clear the new array if user goes to enter a new number
      $('.filter .input').on('keyup', function(){
        $('.filter .markup').text(' ');
      });
        // takes user input and filters the array to any number greater than user input,
        // creates a new array
      $('.filter .submit').on('click', function(){
        let val = $('.filter .input').val();
        let filterVal = parseInt(val);
        let filterArray = initial.filter(value => value > filterVal);

        console.log(filterArray);

        filterArray.forEach(function(value, key){
          // $('.filter .markup').append(`# ${key} `);
          $('.filter .markup').append(`The #${key + 1} value greater than ${filterVal} is ${value}<br>`);
        });
        input.val('');
      });

      // reduce
      $('.reduce .submit').on('click', function(){
        let val = $('.reduce .input').val();
        let reduceVal = parseInt(val);
        let arrayLength = initial.length;
        initial.push(reduceVal);
        let reduceSum = initial.reduce((sum, value) => sum + value);

        // update the array list at top with the added value(s)
        array.append(`# ${arrayLength} `);
        array.append(`the value is ${reduceVal}<br>`);

        $('.reduce .markup').text(`The sum of the array plus your addition of the number ${reduceVal} is ${reduceSum}.`);

        input.val('');
      });

      // find
        // will clear the new array if user goes to enter a new number
      $('.find .input').on('keyup', function(){
        $('.find .markup').text(' ');
      });
        // takes user input and finds the next number in the array greater than user input
      $('.find .submit').on('click', function(){
        let val = $('.find .input').val();
        let findVal = parseInt(val);
        let found = initial.find(value => value > findVal);

        $('.find .markup').text(`I have found, for you, the number ${found}! This is the first number in the array that is over ${findVal}.`);

        input.val('');
      });

      // some
        // will clear the new array if user goes to enter a new number
      $('.some .input').on('keyup', function(){
        $('.some .markup').text(' ');
      });
        // takes user input and finds the next number in the array greater than user input
      $('.some .submit').on('click', function(){
        let val = $('.some .input').val();
        let someVal = parseInt(val);
        let someArray = initial.filter(value => value < someVal);

        console.log(someArray);

        someArray.forEach(function(value, key){
          // $('.filter .markup').append(`# ${key} `);
          $('.some .markup').append(`The #${key + 1} value less than ${someVal} is ${value}<br>`);
        });
        input.val('');
      });

      // every
        // will clear the new array if user goes to enter a new number
      $('.every .input').on('keyup', function(){
        $('.every .markup').text(' ');
      });
        // takes user input and finds the next number in the array greater than user input
      $('.every .submit').on('click', function(){
        let val = $('.every .input').val();
        let everyVal = parseInt(val);
        let everyNum = initial.every(value => value < everyVal);

        console.log(everyNum);

        if(everyNum) {
          $('.every .markup').text(`Congrats, ${everyVal} is greater than every other number in the array!`);
        } else {
          $('.every .markup').text(`Sorry, ${everyVal} is NOT greater than all numbers in the array!`);
        }

        input.val('');
      });

});
