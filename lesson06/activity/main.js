$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
$(".btn-outline-primary").one('click',function(){
  $(".d-inline-block").remove()	;
  $( ".btn-group" ).append( "<button class='btn btn-primary' type='submit'>Submit</button>");
});

	});			