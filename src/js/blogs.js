//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/chosen.jquery.min.js
//= lib/jquery.simplePagination.js

$(document).ready(function() {
  //= partials/header.js

  // blogs handler

  $("#blogsContainer")
    .children()
    .each(function() {
      $(this).on("click", function() {
        $(location).attr("href", "blog-single.html");
      });
    });

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

  // pagination navigation menu

  // Consider adding an ID to your table
  // incase a second table ever enters the picture.
  const items = $("#blogsContainer > div");

  const numItems = items.length;
  const perPage = 9;

  // Only show the first 2 (or first `per_page`) items initially.
  items.slice(perPage).hide();

  // Now setup the pagination using the `.pagination-page` div.
  $("#blogsItemWrapper").pagination({
    items: numItems,
    itemsOnPage: perPage,
    cssStyle: "light-theme",
    prevText: "&lt",
    nextText: "&gt",

    // This is the actual page changing functionality.
    onPageClick: function(pageNumber) {
      // We need to show and hide `tr`s appropriately.
      let showFrom = perPage * (pageNumber - 1);
      let showTo = showFrom + perPage;

      // We'll first hide everything...
      items
        .hide()
        // ... and then only show the appropriate rows.
        .slice(showFrom, showTo)
        .show();
    }
  });

  // reviews_carousel

  $("#reviewsCarousel").slick({
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
