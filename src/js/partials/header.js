//elements UI

// buttons
const navLoginBtn = $("#headerLogin");
const navSearchBtn = $("#headerSearchBtn");
const searchClose = $("#searchCloseBtn");
const basketCartBtn = $("#headerBasket");
const navSelectBtn = $("#headerSelect");
const likeCaseBtn = $("#headerLike");

//hidden forms
const signForm = $("#signForm");
const searchForm = $("#searching");
const basketCart = $("#basketCart");
const menu = $("#fullMenu");
const animateSpan = $("#menuAnimateSpan");
const likeCart = $("#likeCart");

// interactive changing elements

const basketQuanity = $("#basketCartCounter");
const likeQuantity = $("#likeCaseCounter");
const cartCase = $("#cartCase");
const likeCase = $("#likeCase");
const basketCounter = $("#headerBasketCounter");
const likeCounter = $("#likeCounter");

// events

//show Login Form
navLoginBtn.on("click", function() {
  //delete open elements
  basketCart.parent().fadeOut();
  likeCart.parent().fadeOut();
  // open needed element
  signForm.parent().fadeToggle();
});

//show likeCase

likeCaseBtn.on("click", function() {
  basketCart.parent().fadeOut();
  signForm.parent().fadeOut();
  likeCart.parent().fadeToggle();
});

//show Search Form
navSearchBtn.on("click", function() {
  likeCart.parent().fadeOut();
  basketCart.parent().fadeOut();
  signForm.parent().fadeOut();
  searchForm.parent().toggleClass("over-flow_animate");
});

//close Search Form
searchClose.on("click", function() {
  searchForm.parent().toggleClass("over-flow_animate");
});

// show hidden Basket
basketCartBtn.on("click", function() {
  likeCart.parent().fadeOut();
  signForm.parent().fadeOut();
  basketCart.parent().fadeToggle();
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
    basketCart.parent().fadeOut();
  }
});

//remove Element in Favorite
likeCase.on("click", function(e) {
  let numOfItems = likeCase.children().length;
  if (e.target.className === "basket-cart_close") {
    e.target.parentElement.remove();
    numOfItems--;
    likeQuantity.text(numOfItems);
    likeCounter.text(numOfItems);
  }
  if (numOfItems === 0) {
    likeCounter.addClass("hidden");
    likeCart.parent().fadeOut();
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
  likeCart.parent().fadeOut();
  basketCart.parent().fadeOut();
  signForm.parent().fadeOut();
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
