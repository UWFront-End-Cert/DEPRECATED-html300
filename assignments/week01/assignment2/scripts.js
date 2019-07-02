$(function () {
    //Data
    let array1 = [5, 10, 15, 20];
    const resultOriginal = $('.resultOriginal'),
    resultOne = $('#resultOne'),
    resultTwo = $('#resultTwo'),
    inputTwo = $('#inputTwo'),
    resultThree = $('#resultThree'),
    inputThree = $('#inputThree'),
    resultFour = $('#resultFour');

    //first ES6 function, on submit button click
    $("#buttonOne").click(function () {
        // get user input and add to orignal array
        let val = $(this).siblings().val();
        array1.push(parseInt(val));
        // map original array to new array, returning manipulated data
        let array2 = array1.map(function (value) {
            return value + 5;
        });
        // display data on page
        resultOriginal.text(array1);
        resultOne.text(array2);
    });

    $("#buttonTwo").click(function () {
        // get user input to compare against array
        let val = $(this).siblings().val();
        // compare input to array and return result
        let compare = array1.every(function(value){
            return value < parseInt(val);
        });
        // display data on page
        resultOriginal.text(array1);
        inputTwo.text(val);
        resultTwo.text(compare);
    });

    $("#buttonThree").click(function () {
        // get user input to compare against array
        let val = $(this).siblings().val();
        // compare input to array and return result
        let compare = array1.find(function(value){
            return value > parseInt(val);
        });
        // display data on page
        resultOriginal.text(array1);
        inputThree.text(val);
        resultThree.text(compare);
    });

    $("#buttonFour").click(function () {
        // get user input to compare against array
        let val = $(this).siblings().val();
        // filter original array by user value
        let array3 = array1.filter(function(value){
            // return values less than user input
            return value < val;
        });
        // display new data on page
        resultOriginal.text(array1);
        resultFour.text(array3);
    });






});