fetch("js/items.json")
    
    .then((response) => response.json())



    .then((data) => {

    all_products_json = data;

    const products_container = document.getElementById("products_container");
    const other_product_swiper = document.getElementById("other_product_swiper");
    const other_product_swiper2 = document.getElementById("other_product_swiper2");

        
        
    data.forEach((product) => {
      let sale_present = Math.floor( (product.old_price - product.price)  / product.old_price  * 100);

        if (product.old_price) {
        

        products_container.innerHTML += `
                
                <div class="product swiper-slide">
                    <span class="sale_present">${sale_present}%</span>
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="item.html" target="_blank">${product.name} </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old_price"><span>${product.old_price}</span></p>
                    </div>
                </div>

                `;
        }
    });
        
    
    data.forEach((product) => {

        
            other_product_swiper.innerHTML += `
                
                <div class="product swiper-slide">
                    
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="item.html" target="_blank">${product.name} </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        
                    </div>
                </div>

                `;

    });
        


    data.forEach((product) => {
        other_product_swiper2.innerHTML += `
                
                <div class="product swiper-slide">
                    
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="item.html" target="_blank">${product.name} </a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        
                    </div>
                </div>

                `;
    });
        
    });

