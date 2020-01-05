//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/products.js
//= lib/SmoothScroll.js
//= lib/jquery.countdown-timer.js

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

  // add product to basket

  $("#render-product").on("click", function(e) {
    if (
      e.target.className === "product-375_copy" ||
      e.target.parentElement.className === "product-375_copy"
    ) {
      let numOfItems = cartCase.children().length;

      cartCase.append(
        $("<div />", {
          class: "basket-cart_item"
        }).load("../template/header-basket-item.html")
      );
      numOfItems++;
      basketQuanity.text(numOfItems);
      basketCounter.text(numOfItems);
    }
    if (
      e.target.className === "product-375_like" ||
      e.target.parentElement.className === "product-375_like"
    ) {
      let numOfItems = likeCase.children().length;

      likeCase.append(
        $("<div />", {
          class: "basket-cart_item"
        }).load("../template/header-basket-item.html")
      );
      numOfItems++;
      likeQuantity.text(numOfItems);
      likeCounter.text(numOfItems);
    }
    if (
      e.target.className === "product-375_buy" ||
      e.target.parentElement.className === "product-375_buy"
    ) {
      $(location).attr("href", "user-card.html");
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

  // button load more

  $("#load-more").on("click", function() {
    let renderBox = $("#render-product");
    for (let index = 0; index < 8; index++) {
      renderBox.append(
        $("<div />", {
          class: "grid-375_wrapper"
        }).load("../template/product-grid-item.html")
      );
    }
  });
});

// timer

let time = new Date();
let day = (time.getDate() + 2).toString();
let month = (time.getMonth() + 1).toString();

$("#timer").countdownTimer("2020/" + month + "/" + day + " 0:00");
