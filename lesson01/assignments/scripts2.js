// jQuery Doc Ready
$(function () {
  let initial = [3, 6, 9, 10, 11, 20, 37, 45, 56, 89];
      input = $('.input'),
      btn = input.next(),
      result = btn.next(),
      initial.forEach(function(value, key){
        $('.array').append(`# ${key} `);
        $('.array').append(`the value is ${value}<br>`);
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
          $('.filter .markup').append(`# ${key} `);
          $('.filter .markup').append(`the <strong>new</strong> value is ${value}<br>`);
        });
        input.val('');
      });
});
