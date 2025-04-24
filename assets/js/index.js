// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".toggle-button").click(function () {
    $("body").addClass("menuOpen");
  });
  $(".close-btn").click(function () {
    $("body").removeClass("menuOpen");
  });
});  
// Toggle Menu Functionaliy End

// Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed_header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End

// AOS JS Start
AOS.init({
  duration:1200,
});
// AOS JS End