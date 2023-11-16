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
        console.log(basketProductArray);
        quantityBasketProduct(basketProductArray);
      }
    });
    console.log(ifPruductTrue);

    if (ifPruductTrue === 0) {
      console.log('addProduct');
      addProductId(idElem);
      ifPruductTrue = 0;
    }
  } else {
    console.log('addProduct2');

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

function quantityBasketProduct(basketProductArray) {
  let sumProduct = 0;
  basketProductArray.forEach((element) => {
    sumProduct = sumProduct + element.quantity;
  });
  console.log(sumProduct);
  const $BasketSummItems = document.getElementById('basket_summ_items');
  $BasketSummItems.textContent = sumProduct;
}
