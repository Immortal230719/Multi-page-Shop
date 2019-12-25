$(document).ready(function() {
  //= partials/header.js

  // chosen dropdown

  $("#category").chosen({
    disable_search: true
  });
  $("#tags").chosen({
    disable_search: true
  });
  $("#calendar").chosen({
    disable_search: true
  });
  $("#show").chosen({
    disable_search: true
  });

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
