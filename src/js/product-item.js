//= lib/jquery-3.4.1.min.js
//= lib/jquery-migrate-1.2.1.min.js
//= lib/slick.min.js
//= lib/wow.min.js
//= lib/products.js
//= lib/SmoothScroll.js

$(document).ready(function() {
  //tabs init
  //= partials/header.js

  $("#tabList").click(function(event) {
    console.log(event.target.id);
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

  // reviews_carousel
  $("#itemSlider").slick({
    dots: true,
    dotsClass: "item_carousel_dots slick-dots slider__dots",
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear"
  });

  const dots = $("button[id^=slick-slide-control]");
  const images = $("#itemSlider .item_carousel_img");
  dots.text("");
  for (let index = 0; index < images.length; index++) {
    var imageSrc = $(images[index]).attr("src");
    console.log(imageSrc);
    $(dots[index]).css("background-image", "url(" + imageSrc + ")");
  }

  //product-item counter

  let productItemCount = parseInt($("#item-form-counter-number").text());
  $("#item-counter-plus").on("click", function(e) {
    e.preventDefault();
    productItemCount++;
    $("#item-form-counter-number").text(productItemCount);
  });

  $("#item-counter-minus").on("click", function(e) {
    e.preventDefault();
    productItemCount--;
    $("#item-form-counter-number").text(productItemCount);
  });

  // <--reviews likes-->

  // variables
  let likesCounter = parseInt(
    $("#review-likes-idNumber .review-card_like_good").text()
  );
  let dislikesCounter = parseInt(
    $("#review-likes-idNumber .review-card_like_bad").text()
  );
  // handlers
  $("#review-likes-idNumber .review-card_like_btn").on("click", function() {
    $(this).prop("disabled", true);
    $("#review-likes-idNumber .review-card_dislike_btn").prop("disabled", true);
    likesCounter++;
    $("#review-likes-idNumber .review-card_like_good").text(likesCounter);
  });

  $("#review-likes-idNumber .review-card_dislike_btn").on("click", function() {
    $(this).prop("disabled", true);
    $("#review-likes-idNumber .review-card_like_btn").prop("disabled", true);
    dislikesCounter++;
    $("#review-likes-idNumber .review-card_like_bad").text(dislikesCounter);
  });

  function addHandlersLike(id) {
    var likes = parseInt(
      $("#review-likes-" + id + " .review-card_like_good").text()
    );
    var dislikes = parseInt(
      $("#review-likes-" + id + " .review-card_like_bad").text()
    );
    var counterLike = $("#review-likes-" + id + " .review-card_like_good");
    var counterDislike = $("#review-likes-" + id + " .review-card_like_bad");
    var likeBtn = $("review-likes-" + id + " .review-card_like_btn");
    var dislikeBtn = $("review-likes-" + id + " .review-card_dislike_btn");

    likeBtn.on("click", function(e) {
      e.preventDefault();
      $(this).prop("disabled", true);
      dislikeBtn.prop("disabled", true);
      likes++;
      counterLike.text(likes);
    });

    dislikeBtn.on("click", function(e) {
      e.preventDefault();
      $(this).prop("disabled", true);
      likeBtn.prop("disabled", true);
      dislikes++;
      counterDislike.text(dislikes);
    });
  }

  // <--reviews likes-->

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

// render similar products
const renderBox = document.querySelector("#render-product");
console.log(renderBox);
//variables

let renderCounter = 0; //remember how much products rendered

//functions

function renderProduct(arrayOfProducts, numOfProducts) {
  const fragment = document.createDocumentFragment();
  if (Array.isArray(arrayOfProducts)) {
    for (let index = renderCounter; index < numOfProducts; index++) {
      if (arrayOfProducts[index].new === true) {
        const newItem = createNewProduct(arrayOfProducts[index]);
        fragment.appendChild(newItem);
      } else {
        const item = createProduct(arrayOfProducts[index]);
        fragment.appendChild(item);
      }
      renderCounter++;
    }

    renderBox.appendChild(fragment);
    return;
  }
}

function createProduct(objOfProduct) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("grid-375_wrapper");

  const product = document.createElement("div");
  product.classList.add("product");

  const img = document.createElement("img");
  img.classList.add("product_img");
  img.setAttribute("src", `${objOfProduct.image}`);

  const title = document.createElement("a");
  title.classList.add("product_title");
  title.setAttribute("href", "product.html");
  title.textContent = `${objOfProduct.name}`;

  const price = document.createElement("p");
  price.classList.add("product_price");
  price.textContent = `${objOfProduct.price}`;

  if (objOfProduct.hasOwnProperty("discount")) {
    const discountEl = document.createElement("div");
    discountEl.classList.add("product_discount");
    discountEl.textContent = `-${objOfProduct.discount}%`;
    wrapper.appendChild(discountEl);
  }

  wrapper.appendChild(product);
  product.appendChild(img);
  product.appendChild(title);
  product.appendChild(price);

  return wrapper;
}

function createNewProduct(objOfProduct) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("grid-long", "grid-375_wrapper");

  const product = document.createElement("div");
  product.classList.add("new-product");
  product.style.background = `url("${objOfProduct.image}") center (center / cover) no-repeat $main-color2`;

  const sticker = document.createElement("div");
  sticker.classList.add("new-product_sticker");
  sticker.textContent = "new";

  const title = document.createElement("p");
  title.classList.add("new-product_category");
  title.textContent = `lifestyle`;

  const name = document.createElement("p");
  name.classList.add("new-product_title");
  name.textContent = `${objOfProduct.name}`;

  const button = document.createElement("button");
  button.classList.add("new-product_btn");
  button.textContent = "More Info";

  wrapper.appendChild(product);
  product.appendChild(sticker);
  product.appendChild(title);
  product.appendChild(name);
  product.appendChild(button);

  return wrapper;
}

renderProduct(products, 10);
