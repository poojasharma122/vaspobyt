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



  // Read More Functionality JS Start
  $('.subpage-readmore-btn').click(function (e) {
    e.preventDefault();
    const $this = $(this);
    const content = $this.closest('.hotels_card_content').find('.hidden_content');
    content.stop(true, true).slideToggle(500, function () {
        const isVisible = content.is(':visible');   
        $this.html(isVisible
            ? 'Číst méně <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>'
            : 'Přečtěte si více <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>');
    });
});

  // Read More Functionality JS end