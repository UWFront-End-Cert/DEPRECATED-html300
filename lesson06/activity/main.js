$(function() {
  $('h1').addClass('display-1');

  h2 = document.createElement('h2');
  h2.textContent = "Field One";
  $("#sectionOne").append(h2);
  $('h2').addClass('display-3');

  buttonOne = document.createElement('button');
  buttonOne.textContent = "submit";
  buttonOne.setAttribute('id', 'buttonOne');
  $("#form").append(buttonOne);
  $("#buttonOne").addClass('btn btn-primary');



  buttonTwo = document.createElement('button');
  buttonTwo.textContent = "other";
  buttonTwo.setAttribute('id', 'buttonTwo');
  $("#form").append(buttonTwo);
  $('#buttonTwo').addClass('btn btn-primary');
  $('#buttonTwo').addClass('disabled');

  $('#buttonOne').click(function() {
    $("#buttonTwo").removeClass('disabled');
  });



});
