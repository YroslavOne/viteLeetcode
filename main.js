import './style.css';
import { menujs } from './public/component/menu/menu.js';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div id="basket_open" class=""></div>
	<div class="menu_display_flex" id="menu">${menujs()}
</div>
<div class="main_block">

<div class="text_main_block">
<h1 class="main_block_h1">Rest, Relax, Unwind</h1>
<h2>Embrace your choices - we do</h2>
<button class="main_block_button">show now</button>
</div>
</div>

<div class="main_catalog_block">
	<h3 class="featured">/ Featured</h3>
<div class="catalog_block" id="catalog_block">
</div ><a href="./products.html" class="linksProducts">
<button class="catalog_block_button" >all products</button></a>

</div>
`;

setupCounter(document.querySelector('#counter'));

// import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector('#counter'));
