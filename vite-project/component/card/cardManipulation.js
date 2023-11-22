import card from './card.js';
import { cleanListCard } from '../addEventListener.js';
import { basketProductArray } from './checkCard.js';

export function removeItemBasket(indexArr) {
  basketProductArray.splice(indexArr, 1);
  localStorage.basketProduct = JSON.stringify(basketProductArray);
  cleanListCard();
  card();
}

export function productPlus(indexArr) {
  basketProductArray[indexArr].quantity++;
  localStorage.basketProduct = JSON.stringify(basketProductArray);
  cleanListCard();
  card();
}

export function productMinus(indexArr) {
  basketProductArray[indexArr].quantity--;
  if (basketProductArray[indexArr].quantity === 0) {
    removeItemBasket(indexArr);
  } else {
    localStorage.basketProduct = JSON.stringify(basketProductArray);
    cleanListCard();
    card();
  }
}
