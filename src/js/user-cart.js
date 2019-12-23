//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/wow.min.js

$(document).ready(function() {
  //= partials/header.js

  // tabs & buttons

  const tabs = $("#user-cart-tabs");
  const checkout = $("#checkout");
  const shipping = $("#shipping");
  const payment = $("#payment");
  const back = $("#userCartBack");
  const next = $("#userCartNext");

  tabs.on("click", function(e) {
    e.target.focus();
    switch (e.target.id) {
      case "tabCheckout": {
        shipping.fadeOut(0);
        payment.fadeOut(0);
        $("#tabCheckout use").attr("xlink:href", "#sand-clock_icon");
        $("#tabShipping use").attr("xlink:href", "");
        $("#tabCheckout svg").css("fill", "#fff");
        $("#tabPayment use").attr("xlink:href", "");
        back.fadeOut(0);
        checkout.fadeIn(500);
        break;
      }
      case "tabShipping": {
        checkout.fadeOut(0);
        payment.fadeOut(0);
        back.fadeIn(0);
        $("#tabCheckout use").attr("xlink:href", "#checked_icon");
        $("#tabCheckout svg").css({
          height: "10px",
          width: "14px",
          fill: "#3a54d6"
        });
        $("#tabShipping use").attr("xlink:href", "#sand-clock_icon");
        $("#tabShipping svg").css("fill", "#fff");
        shipping.fadeIn(500);
        $("#tabPayment use").attr("xlink:href", "");
        break;
      }
      case "tabPayment": {
        checkout.fadeOut(0);
        shipping.fadeOut(0);
        $("#tabCheckout use").attr("xlink:href", "#checked_icon");
        $("#tabCheckout svg").css({
          height: "10px",
          width: "14px",
          fill: "#3a54d6"
        });
        $("#tabShipping use").attr("xlink:href", "#checked_icon");
        $("#tabShipping svg").css({
          height: "10px",
          width: "14px",
          fill: "#3a54d6"
        });
        $("#tabPayment use").attr("xlink:href", "#sand-clock_icon");
        payment.fadeIn(500);
        break;
      }

      default:
        break;
    }
  });

  next.on("click", function() {});

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
