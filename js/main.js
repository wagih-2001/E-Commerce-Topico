// Open close cart
const cart = document.querySelector(".cart");
const open = document.querySelector(".icone-cart");
const close = document.querySelector(".close");
open.addEventListener("click", function () {
  cart.classList.add("active");
});
close.addEventListener("click", function () {
  cart.classList.remove("active");
});

// Open close menu
const menu = document.querySelector("#menu");
const open_menu = document.querySelector(".btn-open-menu");
const close_menu = document.querySelector(".btn-close-menu");
const overlay = document.querySelector(".bg-overlay");
open_menu.addEventListener("click", function () {
  menu.classList.add("active");
});
close_menu.addEventListener("click", function () {
  menu.classList.remove("active");
});
overlay.addEventListener("click", function () {
  menu.classList.remove("active");
});

// Add In Cart
var all_product_json;
var items_in_cart = document.querySelector(".items-in-cart");
var product_cart = [];
function addToCart(id, btn) {
  product_cart.push(all_product_json[id]);
  btn.classList.add("active");
  getCartitems();
}
let count_item = document.querySelector(".count-item");
let price_cart_total = document.querySelector(".price");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_head = document.querySelector(".price-cart-head");
function getCartitems() {
  let total_price = 0;
  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
     <div class="item-cart">
          <img src="${product_cart[i].img}" alt="" />
          <div class="content">
            <h4>
            ${product_cart[i].name}
            </h4>
            <p class="price">$${product_cart[i].price}</p>
          </div>
          <button onClick="remove_From_cart(${i})" class="delete-item"> <i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    total_price += product_cart[i].price;
  }
  items_in_cart.innerHTML = items_c;

  price_cart_head.innerHTML = ` $${total_price}`;
  count_item.innerHTML = product_cart.length;

  price_cart_total.innerHTML = ` $${total_price}`;
  count_item_cart.innerHTML = `(${product_cart.length} Items In Cart)`;
}

// Remove From Cart
function remove_From_cart(index) {
  product_cart.splice(index, 1);
  getCartitems();

  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");

    product_cart.forEach((product) => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
}
// back to top
let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
