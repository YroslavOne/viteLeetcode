// import { variableCard } from '../../variabel.js';
// import { setupCounter } from '../../counter.js';
import card from '../card/card.js';
import menuLink from './menuLink.js';
import LogoMenu from "../../img/logo/logo-black.svg"
import {cardOpen} from "../addEventListener.js"


function menujs(elementHtml, data) {
  const $menu = document.createElement('div');
  $menu.className = 'menu_display_flex';
  $menu.id = 'menu';
  elementHtml.appendChild($menu);
  const $menuBlock = document.createElement('div');
  $menuBlock.className = "menu_block";
  $menu.append($menuBlock);
  const $menuWidth = document.createElement('div');
  $menuWidth.className = "menu width_30"
  $menuBlock.append($menuWidth);
  const $menuUl = document.createElement('ul');
  $menuWidth.append($menuUl);
  menuLink($menuUl, data)
  const $divLogoMenu = document.createElement("div")
  $divLogoMenu.className = "width_30 logo_menu";
  $menuBlock.append($divLogoMenu);
  const $imgLogMenu = document.createElement("img");
  const $logoMenu = window.location.href
  $imgLogMenu.src = `$logoMenu`;
  $divLogoMenu.append($imgLogMenu);
  const $divBasketWidth = document.createElement("div");
  $divBasketWidth.className = "width_30 basket";
  $menuBlock.append($divBasketWidth);
  $divBasketWidth.className = "width_30 basket";
  const $buttonBusket = document.createElement("button");
  $buttonBusket.className = "basket_fixed";
  $buttonBusket.id = "elemButtinCard";
  $divBasketWidth.append($buttonBusket);
  const $iBicart = document.createElement("i");
  $iBicart.className = "bi bi-cart4";
  $iBicart.style.color = "black";
  $buttonBusket.append($iBicart);
  const $spanBasketSumItems = document.createElement("span");
  $spanBasketSumItems.className = "basket_summ_items"
  $divBasketWidth.append($spanBasketSumItems);
  const $divBasketItemsSumm = document.createElement("div");
  $divBasketItemsSumm.id = "basket_summ_items";
  const $divBasketItemsSummText = document.createTextNode("0")
  $divBasketItemsSumm.appendChild($divBasketItemsSummText);
  $spanBasketSumItems.append($divBasketItemsSumm);
  const elemButtinCard = document.getElementById("elemButtinCard")

  cardOpen(elemButtinCard)

  // elemButtinCard.addEventListener("click", card(elementHtml))
}
export default menujs;
