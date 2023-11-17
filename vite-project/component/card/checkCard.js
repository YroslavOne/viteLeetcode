import {quantityBasketProduct} from "./addCard.js"

export let basketProductArray = [];

 export function checkLocalStorage() {
    if (localStorage.basketProduct !== '') {
      basketProductArray = JSON.parse(localStorage.basketProduct);
    }
    quantityBasketProduct(basketProductArray)
  }