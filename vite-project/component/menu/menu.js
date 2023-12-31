import menuLink from './menuLink.js';
import { cardOpen } from '../addEventListener.js';

function menu(elementHtml, data) {
  const $menu = document.createElement('div');
  $menu.className = 'menu_display_flex';
  $menu.id = 'menu';
  elementHtml.appendChild($menu);
  const $menuBlock = document.createElement('div');
  $menuBlock.className = 'menu_block';
  $menu.append($menuBlock);
  const $menuWidth = document.createElement('div');
  $menuWidth.className = 'menu width_30';
  $menuBlock.append($menuWidth);
  const $menuUl = document.createElement('ul');
  $menuWidth.append($menuUl);
  menuLink($menuUl, data);
  const $divLogoMenu = document.createElement('div');
  $divLogoMenu.className = 'width_30 logo_menu';
  $menuBlock.append($divLogoMenu);
  const $imgLogMenu = document.createElement('img');
  $imgLogMenu.src =
    'https://vanilla-js-store.netlify.app/images/logo-white.svg';
  $imgLogMenu.id = 'logoMenu';
  $divLogoMenu.append($imgLogMenu);
  const $divBasketWidth = document.createElement('div');
  $divBasketWidth.className = 'width_30 basket';
  $menuBlock.append($divBasketWidth);
  $divBasketWidth.className = 'width_30 basket';
  const $buttonBasket = document.createElement('button');
  $buttonBasket.className = 'basket_fixed';
  $buttonBasket.id = 'elemButtonCard';
  $divBasketWidth.append($buttonBasket);
  const $iBicard = document.createElement('i');
  $iBicard.className = 'bi bi-cart4';
  $iBicard.id = 'biCard';
  $iBicard.style.color = '#fff';
  $buttonBasket.append($iBicard);
  const $spanBasketSumItems = document.createElement('span');
  $spanBasketSumItems.className = 'basket_summ_items';
  $divBasketWidth.append($spanBasketSumItems);
  const $divBasketItemsSum = document.createElement('div');
  $divBasketItemsSum.id = 'basket_summ_items';
  const $divBasketItemsSumText = document.createTextNode('0');
  $divBasketItemsSum.appendChild($divBasketItemsSumText);
  $spanBasketSumItems.append($divBasketItemsSum);
  const elemButtonCard = document.getElementById('elemButtonCard');
  cardOpen(elemButtonCard);
}
export default menu;
