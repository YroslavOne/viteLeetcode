import { menujs } from './menu/menu.js';
import {dataMenuLink} from "./data.js";
import {cheking} from "./addEventListener.js"
// import { setupCounter } from './counter.js';

function App(){
    
    
    return (
        `<div id="basket_open" class=""></div>
        <div class="menu_display_flex" id="menu">${menujs(dataMenuLink)}
      </div>
      <div class="main_block">
      
      <div class="text_main_block">
      <h1 class="main_block_h1">Rest, Relax, Unwind</h1>
      <h2>Embrace your choices - we do</h2>
      <button id="main_block_button" class="main_block_button" onclick ={}>show now</button>
      </div>
      </div>
      
      <div class="main_catalog_block">
        <h3 class="featured">/ Featured</h3>
      <div class="catalog_block" id="catalog_block">
      </div ><a href="./products.html" class="linksProducts">
      <button class="catalog_block_button" >all products</button></a>
      
      </div>`
    )
}
export default App;
document.querySelector("#main_block_button")?.addEventListener('click', () => console.log("hi men"))
document.querySelector("#main_block_button")?.click(console.log("hi men"))