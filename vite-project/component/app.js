import menujs from './menu/menu.js';
import { dataMenuLink } from './data.js';
import {chekingis} from "./product/product.js"
import mainBlock from './mainBlock/mainBlock.js';
import { cheking } from './addEventListener.js';
import {checkLocalStorage} from "./card/checkCard.js"
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
    featured: true,
  }
  localStorage.clear();
  chekingis(objFilter);

  const $divMainCatalogBlock = document.createElement("div");
  $divMainCatalogBlock.className = "main_catalog_block";
  $app.append($divMainCatalogBlock);
  const $h3Featured = document.createElement('h3');
  $h3Featured.className = "featured";
  $h3Featured.textContent = "Featured";
  $divMainCatalogBlock.append($h3Featured);
  const $divCatalogBlock = document.createElement("div");
  $divCatalogBlock.className = "catalog_block";
  $divCatalogBlock.id = "catalog_block"
  $divMainCatalogBlock.append($divCatalogBlock);
  const $aLinkProduct = document.createElement('a');
  $aLinkProduct.className = "linksProducts"
  $aLinkProduct.id = "products"
  $divMainCatalogBlock.append($aLinkProduct);
  const $buttonCatalogBlock = document.createElement('button');
  $buttonCatalogBlock.className = 'catalog_block_button';
  $buttonCatalogBlock.textContent = 'all products';
  $aLinkProduct.append($buttonCatalogBlock);
  checkLocalStorage();

//   $app.removeChild($divMainCatalogBlock)
}
export default App;
