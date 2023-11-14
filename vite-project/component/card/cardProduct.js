function cardProduct(elemHtml){
    const $divDisplayFlexBasketProduct = document.createElement("div")
    $divDisplayFlexBasketProduct.className = "display_flex_basket_product";
    elemHtml.appendChild($divDisplayFlexBasketProduct);
    const $divImgElemBasketProduct = document.createElement("div");
    $divImgElemBasketProduct.className = "img_elem_basket_product"
    $divDisplayFlexBasketProduct.appendChild($divImgElemBasketProduct);
    const $imgElemBusketProduct = document.createElement("img");
    $imgElemBusketProduct.src = "https://storage.mds.yandex.net/get-canvas-html5/1003119/8cf9e790-4057-43c2-8d7b-0baf6acddf3b/image.jpg"
    $divImgElemBasketProduct.appendChild($imgElemBusketProduct);
    const $divTextElemBasketProduct = document.createElement("div");
    $divTextElemBasketProduct.className = "text_elem_basket_product";
    $divDisplayFlexBasketProduct.appendChild($divTextElemBasketProduct);
    const $pTitleElemBasketProduct = document.createElement("p")
    $pTitleElemBasketProduct.className = "title_elem_basket_product"
    $divTextElemBasketProduct.appendChild($pTitleElemBasketProduct);
    const $pPriceElemBasketProduct = document.createElement("p")
    $pPriceElemBasketProduct.className = "price_elem_basket_product"
    $divTextElemBasketProduct.appendChild($pPriceElemBasketProduct);
    const $buttonElemBasketProduct = document.createElement("button")
    $buttonElemBasketProduct.className = "button_elem_basket_product";
    $buttonElemBasketProduct.id = "removeItemBasket";
    $buttonElemBasketProduct.textContent = "remove";
    $divTextElemBasketProduct.appendChild($buttonElemBasketProduct);
    const $divQuantityElemBasketProduct = document.createElement("div");
    $divQuantityElemBasketProduct.className = "quantity_elem_basket_product";
    $divDisplayFlexBasketProduct.appendChild($divQuantityElemBasketProduct);
    const $buttonQuantityPlus = document.createElement("button");
    $buttonQuantityPlus.className = "quantity_plus";
    $buttonQuantityPlus.id = "productPlus"
    const $pQuantityTextBasketProduct = document.createElement('p');
    const $buttonQuantityMinus = document.createElement("button")
    $buttonQuantityMinus.className = "quantity_minus";
    $buttonQuantityMinus.id = "productMinus"


    // <div class="display_flex_basket_product">
    // <div class="img_elem_basket_product">
    //     <img src="${element.img}" alt="">
    // </div>
    // <div class="text_elem_basket_product">
        // <p class="title_elem_basket_product">${element.name}</p>
        // <p class="price_elem_basket_product">${element.price}</p>
        // <button class="button_elem_basket_product" onclick="removeItemBasket(${indexObjProduct})">remove</button>
    
    // </div>
    // <div class="quantity_elem_basket_product">
        <button class="quantity_plus" onclick=productPlus()><i class="bi bi-caret-up"></i></button>
        <p class="quantity_text_basket_product">${element.quantity}</p>
        <button class="quantity_minus" onclick=productMinus()><i class="bi bi-caret-down"></i></button>
    // </div>
    // </div>
}
export default cardProduct;