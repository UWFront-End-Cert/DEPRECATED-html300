// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    // submit.on('click', function () {
    //     // Grab the input value and parse it into a number
    //     const val = input.val();
    //     const num = parseInt(val);
    //     // Verify the user gave us a real number
    //     if (!isNaN(num)) {
    //         // Add our new number to the data array
    //         data.push(num);
    //         // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
    //         const sum = data.reduce((acc, curr) => acc + curr);
    //         // Add our new total to the page
    //         resultSum.text(sum);
    //         // Reset the input value to an empty string
    //         input.val('');
    //     }
    // });
    let name = $('#name');
    let subName = name.next();
    let valName = subName.next();
    let age = $('#age');
    let subAge = age.next();
    let valAge = subAge.next();
    let hobbies = $('.hobby');
    let subHobby = hobbies.next();
    let valHobby = subHobby.next();
    let workout = $('#workout');
    let subWorkout = workout.next();
    let valWorkout = subWorkout.next();

    subName.on('click', function(){
      const nameVal = name.val();
      valName.text(`Your name is ${nameVal}, that's a nice name!`);
    });

    subAge.on('click', function(){
      const ageVal = age.val();
      const num = parseInt(ageVal);
      let fifteen = num + 15;
      let judgement = " ";
      if (ageVal > 60) {
        judgement = "have such a young spirit!";
      } else {
        judgement = "are an old soul!";
      }
      valAge.text(`You are ${ageVal} years old! But you ${judgement}! In 15 years you will be ${fifteen}.`);
    });

    subHobby.on('click', function(){
      hobbyArray = hobbies.forEach(function(){
        hobbyAge.text(`You are ${hobbyArray}.`)
      });
    });
      // forEach
      array.forEach(function(value, key){
        console.log("value is " + value);
        console.log("key is " + key);
      });

      // map
      let array2 = array.map(value => value + 15);

      console.log(array2);

      // filter
      let array3 = array.filter(value => value > 20);

      console.log(array3);

      // reduce
      let sum = array.reduce(function(sum, value){
        return sum + value
      });

      console.log(sum);

      // includes
      let hello = "I love ES6, it makes writing code much better!";

      console.log(hello.includes("wri"));

      // every
      let over40 = array.every(value => value > 40);

      console.log(`${over40} new value`); // should be false because not every value is greater than 40

      // some
      let over40some = array.some(value => value > 40);

      console.log(over40some);

      // find
      let over40first = array.find(value => value > 40);

      console.log(over40first);

});
