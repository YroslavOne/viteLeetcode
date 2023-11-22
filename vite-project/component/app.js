import menu from './menu/menu.js';
import { dataMenuLink, objFilter } from './data.js';
import { quantityBasketProduct } from './card/addCard.js';
import { basketProductArray } from './card/checkCard.js';
import { checkLocalStorage } from './card/checkCard.js';
import Home from './home.js';
import { allClick } from './addEventListener.js';

function App() {
  const $app = document.getElementById('app');
  const $cardOpen = document.createElement('div');
  $cardOpen.className = 'basket_close';
  $cardOpen.id = 'basket_open';
  document.body.insertBefore($cardOpen, $app);
  menu($app, dataMenuLink);
  Home(objFilter);
  checkLocalStorage();
  quantityBasketProduct(basketProductArray);
  allClick(basketProductArray);
}
export default App;
