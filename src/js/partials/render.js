"Use Strict";

// UI Elements

const renderBox = document.querySelector("#render-product");

// events

//functions

function renderProduct(arrayOfProducts) {
  const fragment = document.createDocumentFragment();

  if (Array.isArray(arrayOfProducts)) {
    console.log("ok");
    for (let index = 0; index < arrayOfProducts.length; index++) {
      if (arrayOfProducts[index].new === true) {
        const newItem = createNewProduct(arrayOfProducts[index]);
        fragment.appendChild(newItem);
      } else {
        const item = createProduct(arrayOfProducts[index]);
        fragment.appendChild(item);
      }
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
  const title = document.createElement("p");
  title.classList.add("product_title");
  title.textContent = `${objOfProduct.name}`;
  const price = document.createElement("p");
  price.classList.add("product_price");
  price.textContent = `${objOfProduct.price}`;
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
  wrapper.appendChild(product);
  product.appendChild(sticker);
  product.appendChild(title);
  product.appendChild(name);
  return wrapper;
}

renderProduct(products);
