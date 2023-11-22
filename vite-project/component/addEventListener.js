import card from "./card/card.js"
import { quantityProduct } from "./card/addCard.js";
import {productPlus, productMinus, removeItemBasket} from "./card/cardManipulation.js"
import Home from "./home.js";
import loupe from "./loupe.js";
import cleanPage from "./cleanPage.js";
import { objFilter } from "./data.js";
import Products from "./products.js"
import { chekingis } from "./product/product.js";
import cleaneProducts from './product/cleaneProducts.js'
import backgroundForPage from './menu/backgroundForPage.js'
import About from "./about.js";


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



export function loupeClick(elementHtml, idLoupe){
    elementHtml.addEventListener('click',()=>{
        localStorage.idLoupe = idLoupe;
        loupe(idLoupe)
    })
}



export function clicklinkMenu(elementHtml, nameFunction){
    elementHtml.addEventListener('click', () => {
        if(nameFunction ==="Home"){
            cleanPage()
            Home(objFilter)
            let backgroundLinkMune = "";
            let Backgroundcard = "#fff";
            let logo = "https://vanilla-js-store.netlify.app/images/logo-white.svg";
            backgroundForPage(backgroundLinkMune, Backgroundcard, logo)
        }

         if(nameFunction ==="About"){
            cleanPage()
            // Products(objFilter)
            About()
            let backgroundLinkMune = "black_li_menu";
            let Backgroundcard = "#222";
            let logo = "https://vanilla-js-store.netlify.app/images/logo-black.svg";
            backgroundForPage(backgroundLinkMune, Backgroundcard, logo)
        
        } if(nameFunction ==="Product"){
            cleanPage()
            Products(objFilter)
            let backgroundLinkMune = "black_li_menu";
            let Backgroundcard = "#222";
            let logo = "https://vanilla-js-store.netlify.app/images/logo-black.svg";
            backgroundForPage(backgroundLinkMune, Backgroundcard, logo)
        }
    });
}

export function tapCompany(elementHtml, herId){
    elementHtml.addEventListener('click', () => {
        objFilter.companyProduct = herId
        cleaneProducts()
        chekingis(objFilter)
    });
}

export function tapNameProduct(name){
        objFilter.nameProduct = name
        cleaneProducts()
        chekingis(objFilter)
}
export function tapValuePrice(name){
    objFilter.priceProduct = name
    cleaneProducts()
    chekingis(objFilter)
}
