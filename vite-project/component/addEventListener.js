import card from "./card/card.js"
import { quantityProduct } from "./card/addCard.js";
import {productPlus, productMinus, removeItemBasket} from "./card/cardManipulation.js"


export function cheking(idelement){
    idelement.addEventListener('click', () => console.log("hi men"))
}

export function cardClose(elemHtml){
    elemHtml.addEventListener('click', () => {
        const $busketClose = document.getElementById("basket_open")
        $busketClose.className = "basket_close"
        // const $idDisplayFlexBasketProduct = document.getElementById("display_flex_basket_product")
        cleanListCard()
      });
}

export function cleanListCard(){
    const $busketOpen = document.getElementById("basket_open")
    const $idBlockBasket = document.getElementById('block_basket')
    $busketOpen.removeChild($idBlockBasket)
}
export function cardOpen(elemHtml){
    elemHtml.addEventListener('click', () => {
        const $busketClose = document.getElementById("basket_open")
        $busketClose.className = "basket_open"
        card()
        
      });
}

export function busketAddAndOpen(elementHtml, id){
    elementHtml.addEventListener('click', () => {
        quantityProduct(id)
        const $busketClose = document.getElementById("basket_open")
        $busketClose.className = "basket_open"
        card()
      });
}

export function upDatePlus(elementHtml, index){
    elementHtml.addEventListener('click', () => {
        productPlus(index)
        cleanListCard()
        card()
      });
    }
export function upDateMinus(elementHtml, index){
        elementHtml.addEventListener('click', () => {
            productMinus(index)
            cleanListCard()
            card()
          });
        }

export function upDateRemove(elementHtml, index){
            elementHtml.addEventListener('click', () => {
                removeItemBasket(index)
                cleanListCard()
                card()
              });
            }

        