import menujs from './menu/menu.js';
import { dataMenuLink } from './data.js';
import {chekingis} from "./product/product.js"
import mainBlock from './mainBlock/mainBlock.js';
import { cheking } from './addEventListener.js';
// import { setupCounter } from './counter.js';

function App() {
  const $app = document.getElementById('app');
  const $cardOpen = document.createElement('div');
  $cardOpen.className = 'basket_close';
  $cardOpen.id = 'basket_open';
  document.body.insertBefore($cardOpen, $app);
  menujs($app, dataMenuLink)
  mainBlock($app);
  const objFilter = {
    filter: 1,
    folterishe: 2,
  }
  localStorage.clear();
  chekingis(objFilter);

  // <div class="main_catalog_block">
  //   <h3 class="featured">/ Featured</h3>
  // <div class="catalog_block" id="catalog_block">
  // </div ><a href="./products.html" class="linksProducts">
  // <button class="catalog_block_button" >all products</button></a>

  // </div>
}
export default App;
