import {basketProductArray} from "./checkCard"
console.log(basketProductArray)

export function quantityProduct(idElem) {
    let ifPruductTrue = 0;
    if (basketProductArray.length > 0) {
      basketProductArray.forEach((element) => {
        if (element.id === idElem) {
          element.quantity = element.quantity + 1;
          localStorage.basketProduct = JSON.stringify(basketProductArray);
          ifPruductTrue = 1;
        //   quantityBasketProduct(basketProductArray);
        }
      });
      console.log(ifPruductTrue);
  
      if (ifPruductTrue === 0) {
        addProductId(idElem);
        ifPruductTrue = 0;
      }
    } else {
      addProductId(idElem);
    }
  }
  
  
  function addProductId(idElem) {
    let arrayProduct = JSON.parse(localStorage.storage)
    arrayProduct.forEach(element => {
      if(idElem === element.id)
      basketProductArray.push({
        id: element.id,
        name: element.fields.name,
        price: roundUpPrice(element.fields.price),
        img: element.fields.image[0].url,
        quantity: 1,
      });
    });
    
    localStorage.basketProduct = JSON.stringify(basketProductArray);
    // quantityBasketProduct(basketProductArray);
  }
  
//   function quantityBasketProduct(basketProductArray) {
//     let sumProduct = 0;
//     basketProductArray.forEach((element) => {
//       sumProduct = sumProduct + element.quantity;
//     });
//     console.log(sumProduct);
//     document.getElementById('basket_summ_items').innerHTML = sumProduct;
//   }