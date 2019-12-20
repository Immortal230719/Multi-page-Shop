//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/wow.min.js

$(document).ready(function() {
  //= partials/header.js

  //product-item counter

  let productItemCount = parseInt($("#item-in-cart-counter-number").text());
  $("#item-counter-plus").on("click", function(e) {
    e.preventDefault();
    productItemCount++;
    $("#item-in-cart-counter-number").text(productItemCount);
  });

  $("#item-counter-minus").on("click", function(e) {
    e.preventDefault();
    productItemCount--;
    $("#item-in-cart-counter-number").text(productItemCount);
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
