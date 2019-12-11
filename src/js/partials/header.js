$(document).ready(function() {
  //elements UI

  // buttons
  const navLoginBtn = $("#headerLogin");
  const navSearchBtn = $("#headerSearchBtn");
  const searchClose = $("#searchCloseBtn");
  const basketCartBtn = $("#headerBasket");
  const navSelectBtn = $("#headerSelect");

  //hidden forms
  const signForm = $("#signForm");
  const searchForm = $("#searching");
  const basketCart = $("#basketCart");
  const menu = $("#fullMenu");
  const animateSpan = $("#menuAnimateSpan");

  // interactive changing elements

  const basketQuanity = $("#basketCartCounter");
  const cartCase = $("#cartCase");
  const basketCounter = $("#headerBasketCounter");

  // events

  //show Login Form
  navLoginBtn.on("click", function() {
    //delete open elements
    basketCart.parent().addClass("hidden_active");
    basketCart.parent().removeClass("hidden_active");
    // open needed element
    signForm.parent().toggleClass("hidden_active");
  });

  //show Search Form
  navSearchBtn.on("click", function() {
    basketCart.parent().removeClass("hidden_active");
    signForm.parent().removeClass("hidden_active");
    searchForm.parent().toggleClass("over-flow_animate");
  });

  //close Search Form
  searchClose.on("click", function() {
    searchForm.parent().toggleClass("over-flow_animate");
  });

  // show hidden Basket
  basketCartBtn.on("click", function() {
    signForm.parent().removeClass("hidden_active");
    basketCart.parent().toggleClass("hidden_active");
  });

  //remove Element in basket
  cartCase.on("click", function(e) {
    let numOfItems = cartCase.children().length;
    if (e.target.className === "basket-cart_close") {
      e.target.parentElement.remove();
      numOfItems--;
      basketQuanity.text(numOfItems);
      basketCounter.text(numOfItems);
    }
    if (numOfItems === 0) {
      basketCounter.addClass("hidden");
      basketCart.parent().toggleClass("hidden_active");
    }
  });

  //show Menu
  navSelectBtn.on("click", function() {
    if (animateSpan[0].className === "menu_animate_span") {
      requestAnimationFrame(animateMenu);
    } else {
      requestAnimationFrame(disapearMenu);
    }
  });

  navSelectBtn.on("keypress", function(e) {
    if (animateSpan[0].className === "menu_animate_span" && e.key === "Enter") {
      requestAnimationFrame(animateMenu);
    } else {
      requestAnimationFrame(disapearMenu);
    }
  });

  // functions

  function animateMenu() {
    basketCart.parent().removeClass("hidden_active");
    signForm.parent().removeClass("hidden_active");
    navSelectBtn.addClass("active");
    animateSpan.addClass("menu_animate_span_disapear");
    setTimeout(() => menu.addClass("menu_animate"), 600);
    setTimeout(() => menu.children().addClass("hidden_grid"), 1500);
  }

  function disapearMenu() {
    navSelectBtn.removeClass("active");
    menu.children().removeClass("hidden_grid");
    menu.removeClass("menu_animate");
    setTimeout(function() {
      animateSpan.removeClass("menu_animate_span_disapear");
    }, 1200);
  }
});
