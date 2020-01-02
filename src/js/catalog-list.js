//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/jQueryUI.min.js
//= lib/jQueryUITouchPounch.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/jquery.simplePagination.js
//= lib/chosen.jquery.min.js
//= lib/SmoothScroll.js

$(document).ready(function() {
  //= partials/header.js

  // pagination navigation menu

  // Consider adding an ID to your table
  // incase a second table ever enters the picture.
  let items = $("#productItemBox > div");

  const numItems = items.length;
  let perPage = 12;
  let showFrom = 0;
  let showTo = 0;

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
      showFrom = perPage * (pageNumber - 1);
      showTo = showFrom + perPage;

      // We'll first hide everything...
      items
        .hide()
        // ... and then only show the appropriate rows.
        .slice(showFrom, showTo)
        .show();
    }
  });

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

  // button of product's view

  const box = $("#productItemBox");

  $("#viewGrid").on("click", function() {
    perPage = 12;
    box.removeClass("grid-fr");
    $(this).addClass("filter_view-grid_active");
    $("#viewList").removeClass("filter_view-list_active");
    box.children().each(function(index, e) {
      $(e).unbind("mouseenter mouseleave");
    });

    box.children().each(function(index, e) {
      $(e)
        .children()
        .removeClass("product-li");
      let childrenLi = $(e)
        .children()
        .find("*");
      childrenLi.each(function(index, e) {
        if ($(e).attr("class") && e.tagName !== "svg") {
          let className = $(e)
            .attr("class")
            .split("_");
          $(e).removeClass("product-li_" + className[1]);
        }
        if (e.tagName === "svg") {
          let className = $(e)
            .attr("class")
            .split("_");
          $(e).removeClass("product-li_" + className[1] + "_icon");
        }
      });
    });

    let numOfPage = $("#blogsItemWrapper")
      .find(".current")
      .text();

    let numofItemHide = parseInt(numOfPage) * perPage - perPage;

    items
      .hide()
      .slice(numofItemHide, numofItemHide + perPage)
      .show();

    hoverItem();
  });

  $("#viewList").on("click", function() {
    perPage = 11;
    $(this).addClass("filter_view-list_active");
    $("#viewGrid").removeClass("filter_view-grid_active");
    box.addClass("grid-fr");

    // remove hover effect on grid elements
    box.children().each(function(index, e) {
      $(e).unbind("mouseenter mouseleave");
    });

    // add class for each children gridBox

    box.children().each(function(index, e) {
      $(e)
        .children()
        .addClass("product-li");
      let childrenLi = $(e)
        .children()
        .find("*");
      childrenLi.each(function(index, e) {
        if ($(e).attr("class") && e.tagName !== "svg") {
          let className = $(e)
            .attr("class")
            .split("_");
          $(e).addClass("product-li_" + className[1]);
        }
        if (e.tagName === "svg") {
          let className = $(e)
            .attr("class")
            .split("_");
          $(e).addClass("product-li_" + className[1] + "_icon");
        }
      });
    });

    let numOfPage = $("#blogsItemWrapper")
      .find(".current")
      .text();

    let numofItemHide = parseInt(numOfPage) * perPage - perPage;

    items
      .hide()
      .slice(numofItemHide, numofItemHide + perPage)
      .show();
  });

  // mouseOver events

  function hoverItem() {
    $("#productItemBox")
      .children()
      .each(function(index, e) {
        $(e).on("click", function() {
          $(location).attr("href", "product.html");
        });
      });
  }

  // initialize hover effect

  hoverItem();
});
