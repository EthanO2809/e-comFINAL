const cartEl = document.querySelector(".nav_bag");
const cartContainer = document.querySelector(".cart_container");
const closeCart = document.querySelector("#close_icon");
const productsContainerEl = document.querySelector(".products_container");
const laptopsContainerEl = document.querySelector(".laptop_Container");
const cartProductEl = document.querySelector(".cart_products");
const totalPriceEl = document.querySelector(".totalPrice");
const cartItemsEl = document.querySelector(".items");
const btnClear = document.querySelector(".btn_clear");
cartEl.addEventListener("click", () => {
  cartContainer.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active");
});
 let products = [
  {
    id: 1,
    image: "https://i.postimg.cc/SKPR9Jz8/bayern-tab-min.jpg",
    title: "ADIDAS FC Bayern 22/23 Jersey",
    desc: "",
    price: 1899,
    instock: 1,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/br9nckmb/9093476a9f0577bf3a6b46ea76e92709.jpg",
    title: "Nike PSG Alternate 23/24 Jersey",
    desc: "",
    price: 1949,
    instock: 1,
  },
  {
    id: 3,
    image:"https://i.postimg.cc/1zDDQGLz/2223-brazil-limited-edition-bl-1662480461-58973f58-progressive.jpg",
    title: "NIKE Brazil Away International Kit 22'",
    desc: "",
    price: 1899,
    instock: 1,
  },
  {
    id: 4,
    image:"https://i.postimg.cc/7Ps7VZ8B/c6578b310aad413fb21a26362cb3f2bd.webp",
    title: "ADIDAS Black Unisex Fitness Tights",
    desc: "",
    price: 694,
    instock: 1,
  },
  {
    id: 5,
    image:"https://i.postimg.cc/hGLZz7YZ/HO22-NBACity-Edition-NA-Off-Body-Golden-State-Hero-0036-05-scaled.webp",
    title: "NIKE Golden State Warriors 22/23",
    desc: "",
    price: 2198,
    instock: 1,
  },
  {
    id: 6,
    image: "https://i.postimg.cc/d0j46ZY7/193089.webp",
    title: "NIKE Unisex Black/Red AirMax 98'",
    desc: "",
    price: 3599,
    instock: 1,
  },
  {
    id: 7,
    image: "https://i.postimg.cc/9XZBfDxw/photo-1617659512089-6fdec6c54406.jpg",
    title: "NIKE Mens White Air Force 1 98'",
    desc: "",
    price: 1800,
    instock: 1,
  },
  {
    id: 8,
    image:
      "https://i.postimg.cc/wMkFXHfd/desktop-wallpaper-nike-dunk-low-retro-black-white-the-darkside-initiative.jpg",
    title: "NIKE DUNK Unisex Low 'Pandas'",
    desc: "",
    price: 3400,
    instock: 1,
  },
  {
    id: 9,
    image:
      "https://i.postimg.cc/fWfBK3xn/nike-air-jordan-11-retro-low-b-1650205434-d7348d8a-progressive.jpg",
    title: "NIKE AIR JORDAN 11 Retro Low 'Bred'",
    desc: "",
    price: 4600,
    instock: 1,
  },
  {
    id: 10,
    image: "https://i.postimg.cc/nrWkDmQ6/download-2.jpg",
    title: "JORDAN 13's 'Chris' Wallace'",
    desc: "",
    price: 4599,
    instock: 1,
  },
  {
    id: 11,
    image: "https://i.postimg.cc/28X19MBd/bfbfb561529c81af67abe115b1b65e98.png",
    title: "NIKE Black Fits for All Dri-Fit Cap",
    desc: "",
    price: 449,
    instock: 1,
  },
  {
    id: 12,
    image:
      "https://i.postimg.cc/L6TyDqFg/Apple-delivers-apple-watch-series-6-09152020-big-jpg-large.jpg",
    title: "APPLE Watch Series 6 2020 V",
    desc: "",
    price: 8999,
    instock: 1,
  },
  {
    id: 13,
    image: "https://i.postimg.cc/2yJ5NkPQ/17234517.jpg",
    title: "NIKE Soccer Ball",
    desc: "",
    price: 499,
    instock: 1,
  },
  {
    id: 14,
    image:
      "https://i.postimg.cc/zXzmqYJW/desktop-wallpaper-nike-for-apple-watch-iwatch.jpg",
    title: "NIKE FIT Watch 23'",
    desc: "",
    price: 6800,
    instock: 1,
  },
  {
    id: 15,
    image: "https://i.postimg.cc/DyXCVCGs/photo-1612387604874-e75a5820637a.jpg",
    title: "NIKE Phantom 22'",
    desc: "",
    price: 3600,
    instock: 1,
  },

];
function renderProducts() {
  productsContainerEl.innerHTML = "";
  products.forEach((product) => {
    const { id, title, image, price } = product;
    const productEl = document.createElement("div");
    productEl.innerHTML = `
      <div class="product">
        <div class="product_img card">
            <img src="${image}" alt="${title}" class="img-00">
            </br>
        </div>
        <div class="product_title">
        <h3 class="prod_title">${title}</h3>
        </div>
        <div class="product_price">
        <h3 class="prod_price">Price: R${price}</h3>
        </div>
        <div class="product_btn">
            <button class="btn-purch" onClick="addToCart(${id})">Add to Cart</button>
        </div>
      </div>
    <br>
    <br>
        `;

    productsContainerEl.appendChild(productEl);
  });
}
renderProducts();

// get/set items from localStorage
let cart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  localStorage.setItem("cartItems", JSON.stringify(products));
  updateCart();

function renderCartProducts() {
  cartProductEl.innerHTML = "";
  cart.forEach((product) => {
    const { id, title, image, price, numberOfUnits } = product;
    const cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <div class="cartProduct">
        <div class="cart_product_flex">
        <div class="cart_product_img">
        <img src="${image}" alt="${title}" class="cart_img">
    </div>
    <div class="cart_product_title">
    <h3>${title}</h3>
    </div>
        </div>
        <div class="cart_product_price">
        <h3>Price: R${price}</h3>
        </div>
        <div class="cart_amount">
        <p class="decrement" onclick="changeNumberOfUnits('minus', ${id})">-</p>
        <div class="number">${numberOfUnits}</div>
        <p class="increment" onclick="changeNumberOfUnits('plus', ${id})">+</p>
        </div>
        <div class="cart_product_btn">
            <p onClick="removeFromCart(${id})"><i class='bx bxs-trash-alt'></i></p>
        </div>
    </div>
        `;

    cartProductEl.appendChild(cartProduct);
  });
}

renderCartProducts();

// add to cart functionality

function addToCart(id) {
  // check if there is an existing product in the cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const product = products.find((product) => product.id === id);
    cart.push({
      ...product,
      numberOfUnits: 1,
    });
  }

  updateCart();
}
// remove from cart functionality

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// updating our cart

function updateCart() {
  renderCartTotal();
  renderCartProducts();
  localStorage.setItem("cartItems", JSON.stringify(cart));
}
updateCart();

// change amount

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
changeNumberOfUnits();

// cart total price

function renderCartTotal() {
  let totalCartPrice = 0;
  totalCartAmount = 0;

  cart.forEach((item) => {
    totalCartPrice += item.price * item.numberOfUnits;
  });

  totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
}

// clear cart

btnClear.addEventListener("click", () => {
  clearCart();
});
function clearCart() {
  if (cart.length >= 1) {
    if (confirm("Do you want to clear the cart")) {
      cart = [];
      localStorage.setItem("cartItems", JSON.stringify(cart));
      updateCart();
    }
  }
}

localStorage.setItem('products',JSON.stringify(products))