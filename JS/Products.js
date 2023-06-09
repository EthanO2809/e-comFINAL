const cartEl = document.querySelector(".nav_bag");
const cartContainer = document.querySelector(".cart_container");
const closeCart = document.querySelector("#close_icon");

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

let Clothes = [
  {
    id: 1,
    image: "https://i.postimg.cc/SKPR9Jz8/bayern-tab-min.jpg",
    Name: "ADIDAS FC Bayern Munchen 22/23 Jersey",
    Price: "R1899,90",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/br9nckmb/9093476a9f0577bf3a6b46ea76e92709.jpg",
    Name: "Nike PSG Alternate 23/24 Jersey",
    Price: "R1949,95",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/1zDDQGLz/2223-brazil-limited-edition-bl-1662480461-58973f58-progressive.jpg",
    Name: "NIKE Brazil Away Kit 22'",
    Price: "R1899,95",
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/7Ps7VZ8B/c6578b310aad413fb21a26362cb3f2bd.webp",
    Name: "ADIDAS Black Fitness Tights",
    Price: "R694,98",
  },
  {
    id: 5,
    image:
      "https://i.postimg.cc/hGLZz7YZ/HO22-NBACity-Edition-NA-Off-Body-Golden-State-Hero-0036-05-scaled.webp",
    Name: "NIKE Golden State Warriors 22/23 Jersey",
    Price: "R2198,95",
  },
];

let dispClothes = document.getElementById("clothing-section");
Clothes.forEach((data) => {
  dispClothes.innerHTML += `
    <div class="card-grid">
             <a href="#" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
             <div class="flex">
             <button class="btn-purchase" id="buttonPurchase">Add to Cart</button>
             <button class="btn-like"><svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
             <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
  
</button>
             </div>
        
            
        </div>
    </div>
    `;
});

let Sneakers = [
  {
    id: 1,
    image: "https://i.postimg.cc/d0j46ZY7/193089.webp",
    Name: "NIKE AirMax 98'",
    Price: "R3599,95",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/9XZBfDxw/photo-1617659512089-6fdec6c54406.jpg",
    Name: "NIKE Air Force 1 98'",
    Price: "R1800,00",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/wMkFXHfd/desktop-wallpaper-nike-dunk-low-retro-black-white-the-darkside-initiative.jpg",
    Name: "NIKE DUNK Low 'Pandas'",
    Price: "R3400,00",
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/fWfBK3xn/nike-air-jordan-11-retro-low-b-1650205434-d7348d8a-progressive.jpg",
    Name: "NIKE AIR JORDAN 11 Retro Low 'Bred'",
    Price: "R4600,00",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/nrWkDmQ6/download-2.jpg",
    Name: "JORDAN 13's 'Christopher Wallace'",
    Price: "R4599,90",
  },
];

let dispSneakers = document.getElementById("sneaker-section");
Sneakers.forEach((data) => {
  dispSneakers.innerHTML += `
    <div class="card-grid">
             <a href="#" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
             <div class="flex">
             <button class="btn-purchase" id="buttonPurchase">Add to Cart</button>
             <button class="btn-like"><svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
             <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
  
</button>
             </div>
            
        </div>
    </div>
    `;
});
let Accessories = [
  {
    id: 1,
    image: "https://i.postimg.cc/28X19MBd/bfbfb561529c81af67abe115b1b65e98.png",
    Name: "NIKE Black Dri-Fit Cap",
    Price: "R449,95",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/L6TyDqFg/Apple-delivers-apple-watch-series-6-09152020-big-jpg-large.jpg",
    Name: "APPLE Watch Series 6",
    Price: "R8999,95",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/2yJ5NkPQ/17234517.jpg",
    Name: "NIKE Soccer Ball",
    Price: "R499,00",
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/zXzmqYJW/desktop-wallpaper-nike-for-apple-watch-iwatch.jpg",
    Name: "NIKE Fitness Watch 23'",
    Price: "R6800,00",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/DyXCVCGs/photo-1612387604874-e75a5820637a.jpg",
    Name: "NIKE Phantom 22'",
    Price: "R3600,00",
  },
];

let dispAccessories = document.getElementById("accessories-section");
Accessories.forEach((data) => {
  dispAccessories.innerHTML += `
    <div class="card-grid">
             <a href="#" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
             <div class="flex">
             <button class="btn-purchase" id="buttonPurchase" >Add to Cart</button>
             <button class="btn-like"><svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg>
             <svg class="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg>
             </button>
             </div>
        </div>
    </div>
    `;
});

// renderProducts();

// get items from localStorage
let cart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
updateCart();
function renderCartProducts() {
  cartProductEl.innerHTML = "";
  cart.forEach((product) => {
    const { id, Name, image, Price, numberOfUnits } = product;
    const cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <div class="cartProduct">
        <div class="cart_product_flex">
        <div class="cart_product_img">
        <img src="${image}" alt="" class="cart_img">
    </div>
    <div class="cart_product_title">
    <h3>${Name}</h3>
    </div>
        </div>
        <div class="cart_product_price">
        <h3>Price: R${Price}</h3>
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
    const product = Accessories.find((product) => product.id === id);
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
