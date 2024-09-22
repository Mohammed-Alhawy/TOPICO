// open cart
const open_cart = document.getElementById("open_cart");
const close_cart = document.querySelector(".close_cart i");
const shopMore =document.querySelector(".button_cart .trans_bg")
const cart = document.querySelector(".cart");

function openCart() {
  cart.classList.add("active");
}
open_cart.onclick = openCart;

function closeCart() {
  cart.classList.remove("active");
}
close_cart.onclick = closeCart;
shopMore.onclick=closeCart;
// add products to cart

let all_products_json;
const items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id, btn) {
  product_cart.push(all_products_json[id]);
  btn.classList.add("active");
  getCartItems();
  countrItems();
  tottalPrice();
}

// this function well worke whene click on the icon cart in items_home file

function getCartItems() {
  let item_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    item_c += `
            <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delet_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
  }
  items_in_cart.innerHTML = item_c;
}

function remove_from_cart(i) {
  product_cart.splice(i, 1);
  getCartItems();

  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");

    product_cart.forEach((product) => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
  countrItems();
  tottalPrice();
}

const countr_item = document.querySelector(".countr_item");
const countr_items_cart = document.querySelector(".top_cart span");

function countrItems() {
  countr_item.innerHTML = ` ${product_cart.length} `;
  countr_items_cart.innerHTML = `  (${product_cart.length} item in cart)  `;
}

const price_cart_Head = document.querySelector(".price_cart_Head");
const price_cart_total = document.querySelector(".price_cart_total");

function tottalPrice() {
  let tottalP = 0;
  product_cart.forEach((product) => {
    tottalP = tottalP + product.price;
  });

  price_cart_Head.innerHTML = ` $${tottalP} `;
  price_cart_total.innerHTML = ` $${tottalP} `;
}

// back_to_top

const back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// open menu & close menu function

const openMenu = document.querySelector(" .links .open-menu");
const closeMenu = document.querySelector(" .links ul .close_menu");
const menu = document.querySelector("header .links ul");

const bgOverlay = document.querySelector(".bg_overlay");

openMenu.addEventListener("click", () => {
  menu.style.left = "0";
  bgOverlay.classList.toggle("actice_bg_overlay")
});

closeMenu.addEventListener("click", () => {
  menu.style.left = "-100%";
  bgOverlay.classList.toggle("actice_bg_overlay")
});


bgOverlay.addEventListener("click", () => {
  menu.style.left = "-100%";
  bgOverlay.classList.toggle("actice_bg_overlay")
  
});



// /******* item page styling ******/

const mainImg = document.querySelector(".item_detail .big_img img");
const smImgs = document.querySelectorAll(".item_detail .sm_imgs img");

smImgs.forEach((img) => {
  img.addEventListener("click", (eo) => {
    mainImg.setAttribute("src", `${eo.target.src}`);
  });
});
