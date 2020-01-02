//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/products.js
//= lib/SmoothScroll.js

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

  // promo-slider

  $(".promo_slider").slick({
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<button type="button" class="promo_slider_next"><div>
      <svg class="promo_slider_next_icon">
        <use xlink:href="#arrow_right_slider"></use>
      </svg>
      </div></button>`,
    prevArrow: `<button type="button" class="promo_slider_prev"><div>
      <svg class="promo_slider_prev_icon">
        <use xlink:href="#arrow_left_slider"></use>
      </svg>
      </div></button>`,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  // reviews_carousel
  $(".reviews_carousel").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<button type="button" class="reviews_carousel_next">></button>`,
    prevArrow: `<button type="button" class="reviews_carousel_prev"><</button>`,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
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

//= partials/render.js
