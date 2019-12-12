//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/products.js

$(document).ready(function() {
  //tabs init
  //= partials/header.js

  $("#tabList").click(function(event) {
    console.log(event.target.id);
    $(event.target)
      .addClass("catalog-tabs_btn_active")
      .siblings()
      .removeClass("catalog-tabs_btn_active");
    switch (event.target.id) {
      case "men":
        $("#tabMen")
          .addClass("hidden_grid")
          .siblings()
          .removeClass("hidden_grid");
        break;
      case "women":
        $("#tabWomen")
          .addClass("hidden_grid")
          .siblings()
          .removeClass("hidden_grid");
        break;
      case "kids":
        $("#tabKids")
          .addClass("hidden_grid")
          .siblings()
          .removeClass("hidden_grid");
        break;
      default:
        alert("somthing wrong");
    }
  });

  // reviews_carousel
  $("#itemSlider").slick({
    dots: true,
    dotsClass: "item_carousel_dots slick-dots slider__dots",
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear"
  });

  const dots = $("button[id^=slick-slide-control]");
  const images = $("#itemSlider .item_carousel_img");
  dots.text("");
  for (let index = 0; index < images.length; index++) {
    var imageSrc = $(images[index]).attr("src");
    console.log(imageSrc);
    $(dots[index]).css("background-image", "url(" + imageSrc + ")");
  }

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
