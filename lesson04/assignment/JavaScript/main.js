$(document).ready(function() {
    // "call" animations for expanding the box and making information visible.
    $(".car-box").mouseenter(function() {
        $(this).css("animation-name", "hover-expand-box");
        $(this).children(":first").css("animation-name", "hover-expand-info");
      });
    
  // "call" animations for contrating the box and hiding the information again.
  $(".car-box").mouseleave(function() {
    $(this).css("animation-name", "reverse-hover-expand-box");
    $(this).children(":first").css("animation-name", "reverse-hover-expand-info");
  });
});
