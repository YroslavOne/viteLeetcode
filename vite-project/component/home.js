import {chekingis} from "./product/product.js"
import mainBlock from './mainBlock/mainBlock.js';
import {checkLocalStorage} from "./card/checkCard.js"

function Home(objFilter) {
  const $app = document.getElementById('app');



  
  mainBlock($app);
  objFilter.featured = true;


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

}
export default Home;