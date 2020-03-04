$(function () {
  const data = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32],
  input = $('.input'),
  submit = $('.submit-1'),
  submit2 = $('.submit-2'),
  submit3 = $('.submit-3'),
  submit4 = $('.submit-4'),
  resultSum = $('.sum'),
  resultFilter = $('.xyz'),
  resultMap = $('.map'),
  resultSort = $('.sort');

  /*Reduce Method Submit function*/
  submit.on('click',function () {
  const val = input.val();
  const num = parseInt(val);
  if(!isNaN(num)){
    data.push(num);
    const sum = data.reduce((acc,curr) => acc+curr);
    resultSum.text(sum);
    input.val('');
    }
  });

  /*Filter Method Submit function*/
  submit2.on('click',function(){
  const val = input.val();
  const num = parseInt(val);
  if(!isNaN(num)){
    data.push(num);
    input.val('');
    }
    const filter = data.filter(acc => acc>=21);
    resultFilter.text(filter);
    });

  /*Map Method Submit function*/
  submit3.on('click',function(){
  const val = input.val();
  const num = parseInt(val);
  if(!isNaN(num)){
      data.push(num);
      input.val('');
    }
  const ageMap = data.map(acc => Math.sqrt(acc)).map(acc => acc * 2);
  resultMap.text(ageMap);
  });

  /* Sort Method Submit function*/
  submit4.on('click',function(){
    const val = input.val();
    const num = parseInt(val);
    if(!isNaN(num)){
      data.push(num);
      input.val('');
    }
    const sortAges = data.sort((acc, curr) => acc - curr);
    resultSort.text(sortAges);
  });

  /* Combined Methods*/
  const combined = data
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
  console.log(combined);

});
