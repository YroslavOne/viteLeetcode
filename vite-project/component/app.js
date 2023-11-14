import menujs from './menu/menu.js';
import { dataMenuLink } from './data.js';
import { cheking } from './addEventListener.js';
import mainBlock from './mainBlock/mainBlock.js';
// import { setupCounter } from './counter.js';

function App() {
  const $app = document.getElementById('app');
  const $cardOpen = document.createElement('div');
  $cardOpen.id = 'basket_open';
  document.body.insertBefore($cardOpen, $app);
  menujs($app, dataMenuLink)
  mainBlock($app);

  // <div class="main_catalog_block">
  //   <h3 class="featured">/ Featured</h3>
  // <div class="catalog_block" id="catalog_block">
  // </div ><a href="./products.html" class="linksProducts">
  // <button class="catalog_block_button" >all products</button></a>

  // </div>
}
export default App;
document
  .querySelector('#main_block_button')
  ?.addEventListener('click', () => console.log('hi men'));
document.querySelector('#main_block_button')?.click(console.log('hi men'));
