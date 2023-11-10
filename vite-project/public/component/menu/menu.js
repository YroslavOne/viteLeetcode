// import { variableCard } from '../../variabel.js';
// import { setupCounter } from '../../counter.js';
import {menuLink} from "./menuLink.js"

export function menujs(data) {
    let elHtml = `
      <div class="menu_block">
      <div class="menu width_30">
        <ul >
        ${menuLink(data)}
        </ul>
      </div>
      <div class="width_30 logo_menu">
      <img src="" alt="">
      </div>
      <div class="width_30 basket" onclick="basketOpen()">
      <button class="basket_fixed"><i class="bi bi-cart4" style="color: black"></i></button>
      <span class="basket_summ_items" >
      <div id="counter">variableCard.quantityElemCard</div>
      </span>
      </div>
      </div>`;
    return elHtml;
  }
  // export let menujs = 'hi';
//   setupCounter(document.getElementById('home'));
  