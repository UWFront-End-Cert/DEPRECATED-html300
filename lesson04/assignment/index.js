// JavaScript source code
var images = ["vsd.jpg", "fdsdb.jpg", "MV5BMjAzNjYwNzkxMl5BMl5BanBnXkFtZTgwMTU1OTk4MDE@._V1_UY317_CR16,0,214,317_AL_.jpg", "benjamin-parker-OhKElOkQ3R-unsplash-cropped.jpg"];
var i = 0;
var p = "images/";
$(document).ready(function () {
    $("#slide").attr("src", images[i]);
    $("#left").click(function () {
        $("#slide").attr("src", images[Math.abs(i % images.length)]);

    });
    $("#right").click(function () {
        $("img").attr("src", images[Math.abs(++i % images.length)]);

    });

});