import { chekingis } from './product/product.js';
import mainBlock from './mainBlock/mainBlock.js';
import { checkLocalStorage } from './card/checkCard.js';
import {openProduct} from "./addEventListener.js"
import {tagForPage} from "./assemblyHtml/assemblyHtml.js"

function Home(objFilter) {
  const $app = document.getElementById('app');

  mainBlock($app);
  objFilter.featured = true;

  

  chekingis(objFilter);
  const $divMainCatalogBlock =  tagForPage.div("main_catalog_block","main_catalog_block","", $app)
  tagForPage.h3("featured","featuredh3","Featured", $divMainCatalogBlock)
  tagForPage.div("catalog_block","catalog_block","", $divMainCatalogBlock)
  const $aLinkProduct = tagForPage.a("linksProducts","products","", $divMainCatalogBlock)
  tagForPage.button("catalog_block_button","catalog_block_button","all products", $aLinkProduct)
  checkLocalStorage();

  const $idButtonCatalogBlock = document.getElementById("catalog_block_button")
  openProduct($idButtonCatalogBlock)
}
export default Home;
