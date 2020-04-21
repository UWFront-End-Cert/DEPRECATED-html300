//pause carousel when hovered
$('#myCarousel').hover('click', function () {
  $(this).carousel('pause');
}, function () {
  $(this).carousel('cycle');
})

// changes between hollow heart and filled heart when clicked on
$(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});

$('.flipper').click(function(){
    const flip= $(this).attr('id');
    const cardid = document.querySelector('#card'+flip);
    console.log(cardid);
    cardid.classList.toggle('is-flipped');
});
