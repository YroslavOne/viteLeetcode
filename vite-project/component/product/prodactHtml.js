import getPriseWhitDot from "./priceWithDot.js"
import {busketAddAndOpen, loupeClick} from "../addEventListener.js"

function prodactHtml(elemHtml, image, id, name, price){
    const priceWithDot = getPriseWhitDot(price);
    const $divCardProductHome = document.createElement('div');
    $divCardProductHome.className = "card_product_home";
    elemHtml.append($divCardProductHome);
    const $divHomeBackgroundFeatured = document.createElement("div");
    $divHomeBackgroundFeatured.className = "home_background_featured";
    $divHomeBackgroundFeatured.style.background = `url(${image})`;
    $divHomeBackgroundFeatured.style.backgroundSize = 'cover';
    $divHomeBackgroundFeatured.style.objectFit = 'contain';
    $divHomeBackgroundFeatured.style.backgroundPosition = 'center';
    $divCardProductHome.appendChild($divHomeBackgroundFeatured);
    const $divBasketAndLoupe = document.createElement("div");
    $divBasketAndLoupe.className = "basket_and_loupe";
    $divHomeBackgroundFeatured.appendChild($divBasketAndLoupe);
    const $aLoupe = document.createElement("a");
    $divBasketAndLoupe.appendChild($aLoupe);
    const $buttonLoupe = document.createElement("button");
    $buttonLoupe.id = id;
    $buttonLoupe.className = `loupe loupeOnClick_${id}`
    $aLoupe.appendChild($buttonLoupe);
    const $iLoupe = document.createElement('i'); 
    $iLoupe.className = "bi bi-search";
    $buttonLoupe.appendChild($iLoupe);
    const $buttonBasketTap = document.createElement("button");
    $buttonBasketTap.className = "basket_tap";
    $buttonBasketTap.id = `toDoBasketOpen_${id}`;
    $divBasketAndLoupe.appendChild($buttonBasketTap);
    const $iBasketTap = document.createElement('i');
    $iBasketTap.className = "bi bi-cart3";
    $buttonBasketTap.appendChild($iBasketTap);
    const $h4ProductFeaturedName = document.createElement("h4");
    $h4ProductFeaturedName.className = "product_featured_name";
    $h4ProductFeaturedName.textContent = name;
    $divCardProductHome.appendChild($h4ProductFeaturedName);
    const $pProductFeaturedPrice = document.createElement("p");
    $pProductFeaturedPrice.className = "product_featured_price"
    $pProductFeaturedPrice.textContent = priceWithDot
    $divCardProductHome.appendChild($pProductFeaturedPrice);
    
    let idBasketAddAndOpen = `toDoBasketOpen_${id}`
    const $EventBasketAddAndOpen = document.getElementById(idBasketAddAndOpen)
    busketAddAndOpen($EventBasketAddAndOpen, id)
    const $idLoupe = document.querySelector(`.loupeOnClick_${id}`);
    loupeClick($idLoupe, id);
    
    // const $buttonLoupeid = document.
}
export default prodactHtml;