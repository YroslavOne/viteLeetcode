import menujs from './menu/menu.js';
import { dataMenuLink } from './data.js';
import {chekingis} from "./product/product.js"
import mainBlock from './mainBlock/mainBlock.js';
import { cheking } from './addEventListener.js';
import {quantityBasketProduct} from './card/addCard.js'
import { basketProductArray } from './card/checkCard.js';
import {checkLocalStorage} from "./card/checkCard.js"
import Home from "./home.js"
// import { setupCounter } from './counter.js';

function App() {
  const $app = document.getElementById('app');
  const $cardOpen = document.createElement('div');
  $cardOpen.className = 'basket_close';
  $cardOpen.id = 'basket_open';
  document.body.insertBefore($cardOpen, $app);
  menujs($app, dataMenuLink)
  // mainBlock($app);
  const objFilter = {
    featured: true,
  }
  // localStorage.clear();
  // chekingis(objFilter);
  Home()
  checkLocalStorage();
  quantityBasketProduct(basketProductArray)
 
//   $app.removeChild($divMainCatalogBlock)
}
export default App;
