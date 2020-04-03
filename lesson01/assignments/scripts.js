//Create object containing ids and labels to build HTML
const inputSet = [
    {
        inputId : 'input-reduce',
        inputLabel: 'Reduce',
        inputSubmit: 'submit-reduce',
        inputResult: 'result-reduce'
    },
    {
        inputId : 'input-map',
        inputLabel: 'Map',
        inputSubmit: 'submit-map',
        inputResult: 'result-map'
    },
    {
        inputId : 'input-some',
        inputLabel: 'Some',
        inputSubmit: 'submit-some',
        inputResult: 'result-some'
    },
    {
        inputId : 'input-find',
        inputLabel: 'Find',
        inputSubmit: 'submit-find',
        inputResult: 'result-find'
    }
];

$(document).ready(function(){
    //create HTML within the section tag
    const target = $('.input-set');
    inputSet.forEach(function(inputItem) {
        //add HTML elements with specific ids and labeling
        target.append(`<label for=${inputItem.inputId}>${inputItem.inputLabel}</label>`);
        target.append(`<input type="text" id=${inputItem.inputId}>`);
        target.append(`<input type="submit" id=${inputItem.inputSubmit}></input>`);
        target.append(`<p><span id=${inputItem.inputResult}></span></p>`);
    })

    const data1 = [1, 2, 3, 4],
    input1 = $('#input-reduce'),
    resultSum1 = $('#result-reduce');

    let data2 = [1, 2, 3, 4];
    const input2 = $('#input-map'),
    resultSum2 = $('#result-map');

    data3 = [1, 2, 3, 4],
    input3 = $('#input-some'),
    resultSum3 = $('#result-some');

    data4 = [1, 2, 3, 4],
    input4 = $('#input-find'),
    resultSum4 = $('#result-find');

     $('#submit-reduce').click(function(){
        const val = input1.val();
        const num = parseInt(val);
        data1.push(num);
        const sum = data1.reduce((acc, curr) => acc + curr);
        resultSum1.text(`My total with reduce is now: ${sum}`);
        input1.val('');
     });

     $('#submit-map').click(function(){
        const val = input2.val();
        const num = parseInt(val);
        data2 = data2.map(element => element + num);
        resultSum2.text(`My array with map is now: ${data2}`);
        input2.val('');
     })

     $('#submit-some').click(function(){
        const val = input3.val();
        const num = parseInt(val);
        const arrayMap = data3.some(element => element > num);
        resultSum3.text(`Are some of the numbers in the array greater than your number?: ${arrayMap}`);
        input3.val('');
     })

     $('#submit-find').click(function(){
        const val = input4.val();
        const num = parseInt(val);
        const anum = data4.find(element => element === num);
        if (anum === num){
            resultSum4.text(`Your number ${anum} exists in the array`);   
        } else {
            resultSum4.text(`${num} does not exist in the array`)
        }      
        input4.val('');
     })
   }); 

