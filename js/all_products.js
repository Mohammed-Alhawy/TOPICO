const btn_filter=document.querySelector(".btn_filter")
const filterMenu=document.querySelector(".All_products .filter")
const products_dev=document.querySelector(".products_dev")


function open_close_filter(params) {
  filterMenu.classList.toggle("active_filter")
}


btn_filter.addEventListener("click" , (eo)=>{
  
open_close_filter()
})



fetch("js/items.json")
  .then((response) => response.json())

  .then((data) => {
    all_products_json = data;

    const products_dev = document.getElementById("products_dev");

    data.forEach((product) => {

      const old_price_p=product.old_price ? `<p class="old_price"><span>${product.old_price}</span></p>` : "";

      let sale_present = Math.floor(((product.old_price - product.price) / product.old_price) * 100);

      const sale_present_span=product.old_price ? `<span class="sale_present">${sale_present}%</span>` : "";


        products_dev.innerHTML += `
                
                <div class="product swiper-slide">
                  ${sale_present_span}
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="#">${product.name} </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_p}
                    </div>
                </div>

                `;
      
    });

  
  });
