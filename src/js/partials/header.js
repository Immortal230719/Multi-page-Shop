//elements UI

// buttons
const navLoginBtn = document.querySelector(".header_login");
const navSearchBtn = document.querySelector(".header_search");
const searchClose = document.querySelector(".search_close");
const basketCartBtn = document.querySelector(".header_basket");
const navSelectBtn = document.querySelector(".header_select");

//hidden forms
const signForm = document.querySelector(".sign");
const searchForm = document.querySelector(".search");
const basketCart = document.querySelector(".basket-cart");
const menu = document.querySelector(".menu");
const animateSpan = document.querySelector(".menu_animate_span");

// interactive changing elements

const basketQuanity = document.querySelector(".basket-cart_title > span");
const cartCase = document.querySelector(".basket-cart_wrapper");

// events
navLoginBtn.addEventListener("click", () => {
  //delete open elements
  basketCart.parentElement.classList.remove("hidden_active");
  basketCart.parentElement.classList.remove("hidden_active");
  // open needed element
  signForm.parentElement.classList.toggle("hidden_active");
});

navSearchBtn.addEventListener("click", () => {
  basketCart.parentElement.classList.remove("hidden_active");
  signForm.parentElement.classList.remove("hidden_active");
  searchForm.parentElement.classList.toggle("over-flow_animate");
});

searchClose.addEventListener("click", () => {
  searchForm.parentElement.classList.toggle("over-flow_animate");
});

basketCartBtn.addEventListener("click", () => {
  signForm.parentElement.classList.remove("hidden_active");
  basketCart.parentElement.classList.toggle("hidden_active");
});

cartCase.addEventListener("click", e => {
  let numOfItems = cartCase.children.length;
  if (e.target.className === "basket-cart_close") {
    e.target.parentElement.remove();
    numOfItems--;
    basketQuanity.textContent = numOfItems;
  } else return;
});

navSelectBtn.addEventListener("click", () => {
  if (animateSpan.className === "menu_animate_span") {
    requestAnimationFrame(animateMenu);
  } else {
    requestAnimationFrame(disapearMenu);
  }
});

navSelectBtn.addEventListener("keypress", e => {
  if (animateSpan.className === "menu_animate_span" && e.code === "Space") {
    requestAnimationFrame(animateMenu);
  } else {
    requestAnimationFrame(disapearMenu);
  }
});

// functions

function animateMenu() {
  basketCart.parentElement.classList.remove("hidden_active");
  signForm.parentElement.classList.remove("hidden_active");
  navSelectBtn.classList.add("active");
  animateSpan.classList.add("menu_animate_span_disapear");
  setTimeout(() => menu.classList.add("menu_animate"), 600);
  setTimeout(() => menu.firstElementChild.classList.add("hidden_grid"), 1500);
}

function disapearMenu() {
  navSelectBtn.classList.remove("active");
  menu.firstElementChild.classList.remove("hidden_grid");
  menu.classList.remove("menu_animate");
  setTimeout(
    () => animateSpan.classList.remove("menu_animate_span_disapear"),
    1200
  );
}
