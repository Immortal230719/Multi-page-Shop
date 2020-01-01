//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/jQueryUI.min.js
//= lib/jQueryUITouchPounch.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/jquery.simplePagination.js
//= lib/chosen.jquery.min.js

$(document).ready(function() {
  //= partials/header.js

  // chosen dropdown

  $("#sort").chosen({
    disable_search: true
  });
  $("#show").chosen({
    disable_search: true
  });

  // filter vertiacal menu

  $("#filterVerticalMenu")
    .children()
    .each(function() {
      $(this).on("click", function(e) {
        if (
          $(e.target)
            .parents(".hidden-ul")
            .hasClass("hidden-ul")
        ) {
          return;
        }
        if (
          $(e.target).hasClass("main-li") ||
          $(e.target)
            .parents(".main-li")
            .hasClass("main-li")
        ) {
          $(this)
            .find("ul")
            .slideToggle(100);
          $(this)
            .find("svg")
            .toggleClass("rotate");
          $(this)
            .find(".filter_menu_close")
            .fadeToggle(100);
          e.stopPropagation();
        } else return;
      });
    });

  // range Input

  $("#rangeInput").slider({
    animate: "fast",
    range: true,
    values: [50, 1500],
    min: 0,
    max: 3000,
    change: function() {
      let rangeValues = $("#rangeInput").slider("values");
      $("#priceMin").text("$" + rangeValues[0].toString());
      $("#priceMax").text("$" + rangeValues[1].toString());
    }
  });

  // mouseOver events

  $("#productItemBox")
    .children()
    .each(function(index, e) {
      $(e).hover(function() {
        $(this)
          .find(".product-375_hover-bg")
          .toggleClass("product-375_hover-bg_active");
        $(this)
          .find(".product-375_category")
          .toggleClass("hidden_active");
        $(this)
          .find(".product-375_flex")
          .toggleClass("hidden_flex");
        $(this)
          .find(".product-375_price")
          .toggleClass("product-375_price_hover");
        $(this)
          .find(".product-375_name")
          .toggleClass("product-375_name_hover");
      });
    });

  // pagination navigation menu

  // Consider adding an ID to your table
  // incase a second table ever enters the picture.
  const items = $("#productItemBox > div");

  const numItems = items.length;
  const perPage = 12;

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

  reviews_carousel;
});
