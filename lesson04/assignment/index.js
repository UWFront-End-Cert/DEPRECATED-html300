// array storing paths to images
var images = ["img/vsd.jpg", "img/fdsdb.jpg", "img/MV5BMjAzNjYwNzkxMl5BMl5BanBnXkFtZTgwMTU1OTk4MDE@._V1_UY317_CR16,0,214,317_AL_.jpg", "img/benjamin-parker-OhKElOkQ3R-unsplash-cropped.jpg"];
// index of the array for image to be displayed
var i = 0;
$(document).ready(function () {
    // initially use the first image in the array
    $("#slide").attr("src", images[i]);
    $("#left").click(function () {
        // When the left side button is clicked, change the image one index down
        $("#slide").attr("src", images[Math.abs(--i % images.length)]);

    });
    $("#right").click(function () {
        // when the right button is clicked, chaneg the image one index forward
        $("img").attr("src", images[Math.abs(++i % images.length)]);

    });

});
