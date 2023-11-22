import { basketProductArray } from './checkCard';
import getPriseWhitDot from '../product/priceWithDot.js';

export function quantityProduct(idElem) {
  let ifPruductTrue = 0;
  if (basketProductArray.length > 0) {
    basketProductArray.forEach((element) => {
      if (element.id === idElem) {
        element.quantity = element.quantity + 1;
        localStorage.basketProduct = JSON.stringify(basketProductArray);
        ifPruductTrue = 1;
        quantityBasketProduct(basketProductArray);
      }
    });
    if (ifPruductTrue === 0) {
      addProductId(idElem);
      ifPruductTrue = 0;
    }
  } else {

    addProductId(idElem);
  }
}

function addProductId(idElem) {
  let arrayProduct = JSON.parse(localStorage.storage);
  console.log();
  arrayProduct.forEach((element) => {
    if (idElem === element.id)
      basketProductArray.push({
        id: element.id,
        name: element.fields.name,
        price: getPriseWhitDot(element.fields.price),
        img: element.fields.image[0].url,
        quantity: 1,
      });
  });

  localStorage.basketProduct = JSON.stringify(basketProductArray);
  quantityBasketProduct(basketProductArray);
}

export function quantityBasketProduct(basketProductArray) {
  let sumProduct = 0;
  basketProductArray.forEach((element) => {
    sumProduct = sumProduct + element.quantity;
  });
  const $BasketSummItems = document.getElementById('basket_summ_items');
  $BasketSummItems.textContent = sumProduct;
}
