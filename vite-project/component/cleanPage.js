import menu from './menu/menu.js';
import { dataMenuLink } from './data.js';
import {tagForPage} from "./assemblyHtml/assemblyHtml.js"

function cleanPage() {
  const $app = document.getElementById('app');
  const $mainBlock = document.querySelector('.main_block');
  const $mainCatalogBlock = document.querySelector('.main_catalog_block');
  $app.parentNode.removeChild($app);
  const $body = document.body
  tagForPage.div("", "app", "", $body)
  const $newAppId = document.getElementById('app');

  menu($newAppId, dataMenuLink);
}
export default cleanPage;
