//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/SmoothScroll.js

$(document).ready(function() {
  $("#sprite").load("/sprite.html");

  //= partials/header.js

  //tabs init

  $("#tabList").click(function(event) {
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

  // Page UP
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $(".page-up").fadeIn();
    } else {
      $(".page-up").fadeOut();
    }
  });
});
