//activeates the toggle buttons for index.html

function init(){

$("#red-btn").click(function(){
    const active = $("#red-btn").attr('class');
    if (active === "btn btn-danger disabled") {
        alert("Read the tooptip and try again");
    }
    //if blue button previous clicked, accpts form and clears data and resets buttons to disable state
    else {
    alert("Your Request has been submitted");
        $("#input1").val('');
        $("#input2").val('');
        $("#input3").val('');
        $("#input4").val('');
        $("#red-btn").attr('class', 'btn btn-danger disabled');
    }
  });
//on click enables red button
  $("#blue-btn").click(function(){
    $("#red-btn").attr('class', 'btn btn-danger');
  });
}