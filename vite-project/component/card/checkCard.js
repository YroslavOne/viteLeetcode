export let basketProductArray = [];

 export function checkLocalStorage() {
    if (localStorage.basketProduct !== '') {
      basketProductArray = JSON.parse(localStorage.basketProduct);
      console.log(basketProductArray[0]);
    }
    quantityBasketProduct(basketProductArray)
  }