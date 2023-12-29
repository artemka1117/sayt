$(document).ready(function() {
  var $backToTop = $("#back-to-top");
  $backToTop.hide();

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 250) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, 900);
  });
});








