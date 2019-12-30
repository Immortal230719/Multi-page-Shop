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

  // // pagination navigation menu

  // // Consider adding an ID to your table
  // // incase a second table ever enters the picture.
  // const items = $("#blogsContainer > div");

  // const numItems = items.length;
  // const perPage = 9;

  // // Only show the first 2 (or first `per_page`) items initially.
  // items.slice(perPage).hide();

  // // Now setup the pagination using the `.pagination-page` div.
  // $("#blogsItemWrapper").pagination({
  //   items: numItems,
  //   itemsOnPage: perPage,
  //   cssStyle: "light-theme",
  //   prevText: "&lt",
  //   nextText: "&gt",

  //   // This is the actual page changing functionality.
  //   onPageClick: function(pageNumber) {
  //     // We need to show and hide `tr`s appropriately.
  //     let showFrom = perPage * (pageNumber - 1);
  //     let showTo = showFrom + perPage;

  //     // We'll first hide everything...
  //     items
  //       .hide()
  //       // ... and then only show the appropriate rows.
  //       .slice(showFrom, showTo)
  //       .show();
  //   }
  // });

  // reviews_carousel
});
