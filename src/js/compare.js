//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/wow.min.js

$(document).ready(function() {
  //= partials/header.js

  // Page UP

  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $(".page-up").fadeIn();
    } else {
      $(".page-up").fadeOut();
    }
  });

  $("a[href='#up']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
