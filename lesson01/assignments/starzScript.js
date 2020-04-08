$(function(){
//this will allow the user to introduce him or herself
   $('#star-sign-button').click(function(){
     let starSign = $('#star-sign-input').val();
   alert('Welcome' + ' ' + starSign + ' ' + 'your fate will now be determined.');
 });

//this button will help the user experience the ridding of negative emations
 $("p").click(function(){
     $(this).hide();
   });

//these are mantras the user can select
let higherPower = ['stronger', 'more valuable', 'better', 'more beautiful', 'lighter', 'only opinions'];
  let meditate = higherPower.map( function(el){$("input[name='mantra']:checked")
   return $(el).parent().text();
 });

  $('#mantra-button').click(function(){
    alert("Repeat after me" + " " + higherPower);
})

//this button will tell the user about his or her chakra color
 $('#color-button').click(function(){
      $("ul").empty();
      $("#color-input[type=text]").each(function(index, color) {
        $("ul").append("<li>" + $(color).val() + " " + "shows you are a very spiritual person. </li>");
    } );
   });

//this button will tell the user's future
   $(".prediction-button").on("click", function () {
                  let fate = $(this).closest("div.belief").find("input[name=’fate’]").val();
      let omen = $('#prediction-input').val();
                  alert(`It will be your fate to ${omen}.`);
               });

//this button will predict the state of the user's wish
 $('#wish-button').click(function(){
   let lucky = $('#wish-input').val();
 alert(`A ${lucky} is certain to come to you.`);
 });


//this just helps me to figure out if the code is working.
  alert("test");
});
