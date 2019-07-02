// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [10, 20, 30, 40],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
          //Find values greater than inputed number
            let sum = data.filter(function(value){
              return value > num;
            });
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
//          };
    });
});


$(function() {
  //variables
    full = $('.full');
    submit = $('.submit-full');
    resultExp = $('.exp');
  //event on submit
  submit.on('click', function() {
    //grab and parse into numbers
    const val = full.val();
    const num = parseInt(val);
    //convert
    var exp = num.toExponential();
    //add number to page
    resultExp.text(exp);
    // Reset the input value to an empty string
    full.val('');
  });

});


$(function() {
  //variables
    radius = $('.radius');
    submit = $('.submit-radius');
    resultCirc = $('.circ');
  //event on submit
  submit.on('click', function() {
    //grab and parse into numbers
    const val = radius.val();
    const num = parseInt(val);
    //do math
    var circ = 2 * num * Math.PI;
    //add number to page
    resultCirc.text(circ);
    // Reset the input value to an empty string
    radius.val('');
  });

});

$(function(){
  //variables
    integer = $('.integer');
    submit = $('.submit-integer');
    resultInter = $('.inter');
  //event on Submit
  submit.on('click', function(){
    //grab and parse into numbers
    const val = integer.val();
    const num = parseInt(val);
    //convert
    var inter = Math.round(num);
    //add number to page
    resultInter.text(inter);
    // Reset the input value to an empty string
    integer.val('');
  });
});
