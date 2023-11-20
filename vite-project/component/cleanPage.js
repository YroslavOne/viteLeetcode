import menujs from './menu/menu.js';
import { dataMenuLink } from './data.js';


function cleanPage(){
const $app = document.getElementById('app');
const $mainBlock = document.querySelector(".main_block");
const $mainCatalogBlock = document.querySelector(".main_catalog_block");
$app.parentNode.removeChild($app)

const $newApp = document.createElement("div")
$newApp.id = "app" 
document.body.appendChild($newApp);
const $newAppId = document.getElementById('app');

menujs($newAppId, dataMenuLink)
}
export default cleanPage;