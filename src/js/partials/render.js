"Use Strict";

// UI Elements

const renderBox = document.querySelector("#render-product");
const loadMoreBtn = document.querySelector("#load-more");

//variables

let renderCounter = 0; //remember how much products rendered

// events

loadMoreBtn.addEventListener("click", e => {
  e.preventDefault();
  renderProduct(products, renderCounter + 10); // add another 10 products
  if (renderBox.children.length === products.length) {
    loadMoreBtn.parentElement.firstElementChild.remove();
  }
  return;
});

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
