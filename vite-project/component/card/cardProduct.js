import {upDatePlus, upDateMinus, upDateRemove} from "../addEventListener.js"

function cardProduct(elemHtml, basketProductArray, index) {
  const $divDisplayFlexBasketProduct = document.createElement('div');
  $divDisplayFlexBasketProduct.className = 'display_flex_basket_product';
  $divDisplayFlexBasketProduct.id = 'display_flex_basket_product';

  elemHtml.appendChild($divDisplayFlexBasketProduct);
  const $divImgElemBasketProduct = document.createElement('div');
  $divImgElemBasketProduct.className = 'img_elem_basket_product';
  $divDisplayFlexBasketProduct.appendChild($divImgElemBasketProduct);
  const $imgElemBasketProduct = document.createElement('img');
  console.log(basketProductArray)
  $imgElemBasketProduct.src = basketProductArray.img;
  $divImgElemBasketProduct.appendChild($imgElemBasketProduct);
  const $divTextElemBasketProduct = document.createElement('div');
  $divTextElemBasketProduct.className = 'text_elem_basket_product';
  $divDisplayFlexBasketProduct.appendChild($divTextElemBasketProduct);
  const $pTitleElemBasketProduct = document.createElement('p');
  $pTitleElemBasketProduct.className = 'title_elem_basket_product';
  $pTitleElemBasketProduct.textContent = basketProductArray.name;
  $divTextElemBasketProduct.appendChild($pTitleElemBasketProduct);
  const $pPriceElemBasketProduct = document.createElement('p');
  $pPriceElemBasketProduct.className = 'price_elem_basket_product';
  $pPriceElemBasketProduct.textContent = basketProductArray.price;
  $divTextElemBasketProduct.appendChild($pPriceElemBasketProduct);
  const $buttonElemBasketProduct = document.createElement('button');
  $buttonElemBasketProduct.className = `button_elem_basket_product removeItemBasket${basketProductArray.id}`;
  $buttonElemBasketProduct.id = index;
  $buttonElemBasketProduct.textContent = 'remove';
  $divTextElemBasketProduct.appendChild($buttonElemBasketProduct);
  const $divQuantityElemBasketProduct = document.createElement('div');
  $divQuantityElemBasketProduct.className = 'quantity_elem_basket_product';
  $divDisplayFlexBasketProduct.appendChild($divQuantityElemBasketProduct);
  const $buttonQuantityPlus = document.createElement('button');
  $buttonQuantityPlus.className = `quantity_plus productPlus${basketProductArray.id}`;
  $buttonQuantityPlus.id = index;
  $divQuantityElemBasketProduct.appendChild($buttonQuantityPlus);
  const $iProductPlus = document.createElement('i');
  $iProductPlus.className = 'bi bi-caret-up';
  $iProductPlus.id = 'productPlus';

  $buttonQuantityPlus.appendChild($iProductPlus);

  const $pQuantityTextBasketProduct = document.createElement('p');
  $pQuantityTextBasketProduct.className = 'quantity_text_basket_product';
  $pQuantityTextBasketProduct.textContent = basketProductArray.quantity;
  $divQuantityElemBasketProduct.appendChild($pQuantityTextBasketProduct);

  const $buttonQuantityMinus = document.createElement('button');
  $buttonQuantityMinus.className = `quantity_minus productMinus${basketProductArray.id}`;
  $buttonQuantityMinus.id = index;
  $divQuantityElemBasketProduct.appendChild($buttonQuantityMinus);
  const $iProductMinus = document.createElement('i');
  $iProductMinus.className = 'bi bi-caret-down';
  $iProductMinus.id = 'productMinus';
  $buttonQuantityMinus.appendChild($iProductMinus);


  const $productPlus = document.querySelector(`.productPlus${basketProductArray.id}`)
  const $productMinus = document.querySelector(`.productMinus${basketProductArray.id}`)
  const $productRemove = document.querySelector(`.removeItemBasket${basketProductArray.id}`)
  upDatePlus($productPlus, index)
  upDateMinus($productMinus, index)
  upDateRemove($productRemove, index)

}
export default cardProduct;
