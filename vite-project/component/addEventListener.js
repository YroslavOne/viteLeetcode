import card from "./card/card.js"
import { quantityProduct } from "./card/addCard.js";

export function cheking(idelement){
    idelement.addEventListener('click', () => console.log("hi men"))
}

export function cardClose(elemHtml){
    elemHtml.addEventListener('click', () => {
        const $busketClose = document.getElementById("basket_open")
        $busketClose.className = "basket_close"
      });
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
        console.log(id)
        quantityProduct(id)
      });
}