//= lib/slick.min.js

$(document).ready(function() {
  // promo-slider
  $(".promo_slider").slick({
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
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
});

//= partials/header.js
