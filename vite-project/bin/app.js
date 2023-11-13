/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./component/app.js":
/*!**************************!*\
  !*** ./component/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { menujs } from './public/component/menu/menu.js';
// import { setupCounter } from './counter.js';

function App(){
    return (
        `<div id="basket_open" class=""></div>
        <div class="menu_display_flex" id="menu">
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
        `
    )
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../img/background_img/main-bcg.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	background: #fff;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
	display: block;
	font-size: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0;
	margin-inline-end: 0;
	font-weight: "";
}

.menu ul li {
	list-style-type: none;
	width: 30%;
	color: #fff;
	letter-spacing: 0.1rem;
	transition: all 0.3s linear;
	font-size: 1.25rem;
	z-index: 100;
}

.menu ul {
	list-style-type: none;
	padding: 0;
	padding-inline-start: 0;
}

.menu_block {
	width: 78.20855614973262%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-content: center;
	z-index: 100;
}

.menu ul {
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-content: center;
}

.width_30 {
	width: 30%;
}

.logo_menu {
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

}

.basket {
	position: relative;
}

.basket img {
	position: absolute;
	right: 0;
}

.basket_summ_items {
	position: absolute;
	top: -10px;
	right: -10px;
	border-radius: 50%;
	background-color: hsl(21, 62%, 45%);
	text-align: center;
	width: 28px;
	height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.basket_summ_items div {
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
}

.main_block {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
	background-size: cover;
	min-height: 100vh;
	background-position: center;
	display: flex;
	align-items: center;
	margin-top: -78px;
	flex-direction: column;

}

.main_block_h1 {
	font-size: 5.25rem;
	letter-spacing: 5px;
	font-weight: 700;
	font-family: 'Kaushan Script', cursive;
	line-height: 1;
	color: #fff;
}

a {
	color: #fff;
}

.text_main_block {
	width: 90%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	text-align: left;
	align-items: left;
	justify-content: center;
	letter-spacing: 1;
	z-index: 0;

}

.text_main_block h2 {
	font-size: 2.75rem;
	margin: 1.5rem 0;
	letter-spacing: 0.1rem;
	color: #fff;
}

.main_block_button {
	width: 117px;
	color: #fff;
	background: transparent;
	border: 1px solid #fff;
	padding: 0.5rem 0.75rem;
	display: inline-block;
	margin-top: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	border-radius: 0.25rem;
	transition: all 0.3s linear;
}

.main_block_button:hover {
	background: #fff;
	color: hsl(21, 62%, 45%);
}

.featured {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	line-height: 1;
	font-size: 2.5rem;
	letter-spacing: 0.1rem;
	text-transform: capitalize;
	line-height: 1.25;
	margin-bottom: 0.75rem;
}

.catalog_block {
	display: flex;
	max-width: 1170px;
	width: 90vw;
}

.home_background_featured {
	width: 100%;
	height: 13rem;
	background-repeat: no-repeat;
	position: relative;
	box-sizing: border-box;
	object-fit: cover;
	background-size: cover;
}

.menu_main_block {
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
}

.catalog_block {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 3rem auto 2rem auto;
	gap: 1rem;
	min-height: 6rem;
	position: relative;

}

.product_featured_name {
	margin-bottom: 0.25rem;
	text-transform: capitalize;
	letter-spacing: 0.1rem;
	color: hsl(210, 22%, 49%);
	text-align: center;

}

.product_featured_price {
	text-align: center;
	margin-bottom: 0;
	color: hsl(209, 34%, 30%);
	font-weight: 700;
	line-height: 1;
	letter-spacing: 0.1rem;
	text-transform: capitalize;

}

.catalog_block_button {
	display: block;
	width: 11rem;
	margin: 0 auto;
	text-align: center;
	background: hsl(21, 62%, 45%);
	color: #fff;
	border-radius: 0.25rem;
	padding: 0.375rem 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	display: inline-block;
	transition: all 0.3s linear;
	border-color: transparent;
	cursor: pointer;
}

.catalog_block_button:hover {
	background: hsl(21, 65%, 59%);
	color: #222;
}

.linksProducts {
	display: flex;
}

a {
	color: #fff;
	text-decoration: none;
}

.menu ul li a:hover {
	transition: 1s;
	color: hsl(21, 62%, 45%);
}

.basket_and_loupe {
	color: white;
	width: 100%;
	height: 100%;
	margin: 0;
	position: relative;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
}

.main_catalog_block ul li {
	text-decoration: none;
}

.main_catalog_block {
	display: flex;
	flex-direction: column;
}

.basket_tap {
	margin-left: 5px;
	width: 32px;
	height: 32px;
	background: none;
	border: none;
}

.basket_and_loupe:hover .basket_tap {
	color: #fff;
	content: "&#xF52A";
	width: 32px;
	height: 32px;
	background-color: hsl(21, 62%, 45%);
	background-size: contain;
	border-radius: 50%;
	border: none;
}

.basket_fixed {
	right: 0;
	background: none;
	border: none;
	color: #fff;
	content: "&#xF52A";
	width: 100%;
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: end;
	justify-content: flex-end;
}

.bi-cart3 {
	display: none;
}

.bi-cart4 {
	display: flex;
	cursor: pointer;
	color: #fff;
	font-weight: 800px;
	font-size: 40px;
}

.basket_and_loupe:hover .bi-cart3 {
	display: block;
	color: #fff;
	font-weight: 500px;
	font-size: 20px;
}

.loupe {
	margin-right: 5px;
	width: 32px;
	height: 32px;
	background: none;
	border: none;
}

.basket_and_loupe:hover .loupe {
	color: #fff;
	content: "&#xF52A";
	width: 32px;
	height: 32px;
	background-color: hsl(21, 62%, 45%);
	background-size: contain;
	border-radius: 50%;
	border: none;
}

.bi-search {
	display: none;
}

.basket_and_loupe:hover .bi-search {
	display: block;
	font-weight: 500px;
	font-size: 20px;
}

.breadCrumbs {
	min-height: 20vh;
	display: flex;
	place-items: center;
	background: hsl(210, 36%, 96%);
	color: hsl(210, 22%, 49%);
	justify-content: center;
}

#breadCrumbs {
	width: 90%;
	font-size: 1.75rem;
	text-transform: capitalize;
}

.cardItem {
	display: flex;
	justify-content: center;
}

.block_cardItem {
	width: 90%;
	max-width: 1170px;
	display: grid;
	gap: 1rem 2rem;
	grid-template-columns: 1fr 1fr;
}

.img_product_cart_loupe img {
	height: 25rem;
	border-radius: 0.25rem;
	object-fit: cover;
	width: 100%;
	display: block;
}

.colorElem {
	display: block;
	content: "";
	width: 16px;
	height: 16px;
	margin-right: 8px;
	border-radius: 50%;

}

.colorFlex {
	display: flex;
}

.prise_loupe {
	color: hsl(209, 34%, 30%);
	font-size: 1.25rem;
	font-weight: 500;
	margin-bottom: 1.25rem;
}

.company_loupe {
	font-size: 1.2rem;
	color: hsl(210, 31%, 80%);
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	margin-bottom: 1.25rem;
	font-family: 'Kaushan Script', cursive;
}

.title_loupe {
	line-height: 1;
	font-size: 2.5rem;
	letter-spacing: 0.1rem;
	text-transform: capitalize;
	line-height: 1.25;
	margin-bottom: 0.75rem;
	font-weight: 400;
}

.description_loupe {
	max-width: 25em;
	line-height: 1.8;
	margin-bottom: 1.25rem;
	color: hsl(210, 22%, 49%);
}

.basket_tap_loupe {
	background: hsl(21, 62%, 45%);
	color: #fff;
	border-radius: 0.25rem;
	padding: 0.375rem 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	display: inline-block;
	transition: all 0.3s linear;
	border-color: transparent;
	cursor: pointer;
}

.basket_tap_loupe:hover {
	background: hsl(21, 65%, 59%);
	color: #222;
}

.black_li_menu {
	color: #222;
}

.menu_display_flex {
	display: flex;
	justify-content: center;
}

.block_products {
	margin-top: 64px;
	margin-bottom: 64px;
	display: flex;
	width: 90%;
	max-width: 1170px;
	justify-content: center;
}

#text_input {
	padding: 0.5rem;
	background: hsl(210, 36%, 96%);
	border-radius: 0.25rem;
	border-color: transparent;
	letter-spacing: 0.1rem;
	text-transform: capitalize;
}

.title_products {
	font-weight: 500;
	margin: 1.5rem 0 0.5rem;
	line-height: 1;
	font-size: 1rem;
	letter-spacing: 0.1rem;
	text-transform: capitalize;
}

.ul_products li {
	list-style: none;
	cursor: pointer;
	display: block;
	margin: 0.25em 0;
	padding: 0.25rem;
	text-transform: capitalize;
	background: transparent;
	border-color: transparent;
	letter-spacing: 0.1rem;
	color: hsl(210, 22%, 49%);
	cursor: pointer;
	transition: all 0.3s linear;
}

.ul_products li:hover {
	color: hsl(209, 28%, 39%);
}

.value_price_input {
	margin-bottom: 1.25rem;
	color: hsl(210, 22%, 49%);
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.sidebar {
	position: sticky;
	top: 1rem;
	margin-right: 50px;
}

.block_products_flex {
	display: flex;
	justify-content: center;
}



.basket_close {
	transition: all 0.3s linear;
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	max-width: 400px;
	background: hsl(210, 36%, 96%);
	padding: 3rem 1rem 0 1rem;
	display: grid;
	grid-template-rows: auto 1fr auto;

	transform: translateX(100%);

	overflow: scroll;
	z-index: 1000;
}

.basket_open {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	max-width: 400px;
	background: hsl(210, 36%, 96%);
	padding: 0rem 1rem 0 1rem;
	display: grid;
	grid-template-rows: auto 1fr auto;
	transition: all 0.3s linear;
	overflow: scroll;
	z-index: 1000;
}

.display_flex_basket_product{
    margin: 1rem 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 1.5rem;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
}
.img_elem_basket_product img{
    width: 75px;
    height: 50px;
    object-fit: cover;
    border-radius: 0.25rem;
}
.title_elem_basket_product{
    margin-bottom: 0.15rem;
    line-height: 1;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    font-weight: 400;
}

.price_elem_basket_product {margin-bottom: 0;
    font-size: 0.75rem;
    color: var(--clr-grey-3);
    margin-top:0;
}
.button_elem_basket_product{
    background: transparent;
    border-color: transparent;
    color: hsl(210, 22%, 49%);
    letter-spacing: 0.1rem;
    cursor: pointer;
}
.bi-caret-up {
    background: transparent;
    border-color: transparent;
    color: hsl(21, 62%, 45%);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.25rem;
}
.bi-caret-down{
    background: transparent;
    border-color: transparent;
    color: hsl(21, 62%, 45%);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0.25rem;
}
.quantity_plus{
    border: none;
    background: none;
}
.quantity_minus{
    border: none;
    background: none;
}
.quantity_text_basket_product {
    margin: 0;
    text-align: center;
    color: hsl(209, 34%, 30%);
    line-height: 1;
}
.close_basket{
    padding-top:15px ;
    font-size: 40px;
    font-weight: 900;
    line-height: 20%;
}
.title_basket{
    font-family: 'Kaushan Script', cursive;
    font-weight: 500;
    line-height: 1;
    font-size: 1.75rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    text-align: center;
}
.basket_block_main{
    display: flex;
    flex-direction: column;

}
._prise_basket{
    font-family: 'Kaushan Script', cursive;
    font-weight: 500;
    line-height: 1;
    font-size: 1.75rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    margin-bottom: 2rem;
    text-align: center;
}
.basket_checkout{
    display: block;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 3rem;
    background: hsl(21, 62%, 45%);
    color: #fff;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s linear;
    border-color: transparent;
    cursor: pointer;
}
.basket_checkout:hover{
    color: #222;
    background: hsl(21, 65%, 59%);
}`, "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tbackground: #fff;\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n\tdisplay: block;\n\tfont-size: 0;\n\tmargin-block-start: 0;\n\tmargin-block-end: 0;\n\tmargin-inline-start: 0;\n\tmargin-inline-end: 0;\n\tfont-weight: \"\";\n}\n\n.menu ul li {\n\tlist-style-type: none;\n\twidth: 30%;\n\tcolor: #fff;\n\tletter-spacing: 0.1rem;\n\ttransition: all 0.3s linear;\n\tfont-size: 1.25rem;\n\tz-index: 100;\n}\n\n.menu ul {\n\tlist-style-type: none;\n\tpadding: 0;\n\tpadding-inline-start: 0;\n}\n\n.menu_block {\n\twidth: 78.20855614973262%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\talign-content: center;\n\tz-index: 100;\n}\n\n.menu ul {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\talign-content: center;\n}\n\n.width_30 {\n\twidth: 30%;\n}\n\n.logo_menu {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: center;\n\n}\n\n.basket {\n\tposition: relative;\n}\n\n.basket img {\n\tposition: absolute;\n\tright: 0;\n}\n\n.basket_summ_items {\n\tposition: absolute;\n\ttop: -10px;\n\tright: -10px;\n\tborder-radius: 50%;\n\tbackground-color: hsl(21, 62%, 45%);\n\ttext-align: center;\n\twidth: 28px;\n\theight: 28px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n.basket_summ_items div {\n\tcolor: #fff;\n\tfont-weight: bold;\n\tfont-size: 1rem;\n}\n\n.main_block {\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../img/background_img/main-bcg.jpeg') no-repeat;\n\tbackground-size: cover;\n\tmin-height: 100vh;\n\tbackground-position: center;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-top: -78px;\n\tflex-direction: column;\n\n}\n\n.main_block_h1 {\n\tfont-size: 5.25rem;\n\tletter-spacing: 5px;\n\tfont-weight: 700;\n\tfont-family: 'Kaushan Script', cursive;\n\tline-height: 1;\n\tcolor: #fff;\n}\n\na {\n\tcolor: #fff;\n}\n\n.text_main_block {\n\twidth: 90%;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: left;\n\talign-items: left;\n\tjustify-content: center;\n\tletter-spacing: 1;\n\tz-index: 0;\n\n}\n\n.text_main_block h2 {\n\tfont-size: 2.75rem;\n\tmargin: 1.5rem 0;\n\tletter-spacing: 0.1rem;\n\tcolor: #fff;\n}\n\n.main_block_button {\n\twidth: 117px;\n\tcolor: #fff;\n\tbackground: transparent;\n\tborder: 1px solid #fff;\n\tpadding: 0.5rem 0.75rem;\n\tdisplay: inline-block;\n\tmargin-top: 0.75rem;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.1rem;\n\tborder-radius: 0.25rem;\n\ttransition: all 0.3s linear;\n}\n\n.main_block_button:hover {\n\tbackground: #fff;\n\tcolor: hsl(21, 62%, 45%);\n}\n\n.featured {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-weight: 500;\n\tline-height: 1;\n\tfont-size: 2.5rem;\n\tletter-spacing: 0.1rem;\n\ttext-transform: capitalize;\n\tline-height: 1.25;\n\tmargin-bottom: 0.75rem;\n}\n\n.catalog_block {\n\tdisplay: flex;\n\tmax-width: 1170px;\n\twidth: 90vw;\n}\n\n.home_background_featured {\n\twidth: 100%;\n\theight: 13rem;\n\tbackground-repeat: no-repeat;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tobject-fit: cover;\n\tbackground-size: cover;\n}\n\n.menu_main_block {\n\tdisplay: flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n}\n\n.catalog_block {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tmargin: 3rem auto 2rem auto;\n\tgap: 1rem;\n\tmin-height: 6rem;\n\tposition: relative;\n\n}\n\n.product_featured_name {\n\tmargin-bottom: 0.25rem;\n\ttext-transform: capitalize;\n\tletter-spacing: 0.1rem;\n\tcolor: hsl(210, 22%, 49%);\n\ttext-align: center;\n\n}\n\n.product_featured_price {\n\ttext-align: center;\n\tmargin-bottom: 0;\n\tcolor: hsl(209, 34%, 30%);\n\tfont-weight: 700;\n\tline-height: 1;\n\tletter-spacing: 0.1rem;\n\ttext-transform: capitalize;\n\n}\n\n.catalog_block_button {\n\tdisplay: block;\n\twidth: 11rem;\n\tmargin: 0 auto;\n\ttext-align: center;\n\tbackground: hsl(21, 62%, 45%);\n\tcolor: #fff;\n\tborder-radius: 0.25rem;\n\tpadding: 0.375rem 0.75rem;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.1rem;\n\tdisplay: inline-block;\n\ttransition: all 0.3s linear;\n\tborder-color: transparent;\n\tcursor: pointer;\n}\n\n.catalog_block_button:hover {\n\tbackground: hsl(21, 65%, 59%);\n\tcolor: #222;\n}\n\n.linksProducts {\n\tdisplay: flex;\n}\n\na {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n\n.menu ul li a:hover {\n\ttransition: 1s;\n\tcolor: hsl(21, 62%, 45%);\n}\n\n.basket_and_loupe {\n\tcolor: white;\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n}\n\n.main_catalog_block ul li {\n\ttext-decoration: none;\n}\n\n.main_catalog_block {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.basket_tap {\n\tmargin-left: 5px;\n\twidth: 32px;\n\theight: 32px;\n\tbackground: none;\n\tborder: none;\n}\n\n.basket_and_loupe:hover .basket_tap {\n\tcolor: #fff;\n\tcontent: \"&#xF52A\";\n\twidth: 32px;\n\theight: 32px;\n\tbackground-color: hsl(21, 62%, 45%);\n\tbackground-size: contain;\n\tborder-radius: 50%;\n\tborder: none;\n}\n\n.basket_fixed {\n\tright: 0;\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcontent: \"&#xF52A\";\n\twidth: 100%;\n\tborder: none;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\talign-content: end;\n\tjustify-content: flex-end;\n}\n\n.bi-cart3 {\n\tdisplay: none;\n}\n\n.bi-cart4 {\n\tdisplay: flex;\n\tcursor: pointer;\n\tcolor: #fff;\n\tfont-weight: 800px;\n\tfont-size: 40px;\n}\n\n.basket_and_loupe:hover .bi-cart3 {\n\tdisplay: block;\n\tcolor: #fff;\n\tfont-weight: 500px;\n\tfont-size: 20px;\n}\n\n.loupe {\n\tmargin-right: 5px;\n\twidth: 32px;\n\theight: 32px;\n\tbackground: none;\n\tborder: none;\n}\n\n.basket_and_loupe:hover .loupe {\n\tcolor: #fff;\n\tcontent: \"&#xF52A\";\n\twidth: 32px;\n\theight: 32px;\n\tbackground-color: hsl(21, 62%, 45%);\n\tbackground-size: contain;\n\tborder-radius: 50%;\n\tborder: none;\n}\n\n.bi-search {\n\tdisplay: none;\n}\n\n.basket_and_loupe:hover .bi-search {\n\tdisplay: block;\n\tfont-weight: 500px;\n\tfont-size: 20px;\n}\n\n.breadCrumbs {\n\tmin-height: 20vh;\n\tdisplay: flex;\n\tplace-items: center;\n\tbackground: hsl(210, 36%, 96%);\n\tcolor: hsl(210, 22%, 49%);\n\tjustify-content: center;\n}\n\n#breadCrumbs {\n\twidth: 90%;\n\tfont-size: 1.75rem;\n\ttext-transform: capitalize;\n}\n\n.cardItem {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.block_cardItem {\n\twidth: 90%;\n\tmax-width: 1170px;\n\tdisplay: grid;\n\tgap: 1rem 2rem;\n\tgrid-template-columns: 1fr 1fr;\n}\n\n.img_product_cart_loupe img {\n\theight: 25rem;\n\tborder-radius: 0.25rem;\n\tobject-fit: cover;\n\twidth: 100%;\n\tdisplay: block;\n}\n\n.colorElem {\n\tdisplay: block;\n\tcontent: \"\";\n\twidth: 16px;\n\theight: 16px;\n\tmargin-right: 8px;\n\tborder-radius: 50%;\n\n}\n\n.colorFlex {\n\tdisplay: flex;\n}\n\n.prise_loupe {\n\tcolor: hsl(209, 34%, 30%);\n\tfont-size: 1.25rem;\n\tfont-weight: 500;\n\tmargin-bottom: 1.25rem;\n}\n\n.company_loupe {\n\tfont-size: 1.2rem;\n\tcolor: hsl(210, 31%, 80%);\n\ttext-transform: uppercase;\n\tletter-spacing: 0.1rem;\n\tmargin-bottom: 1.25rem;\n\tfont-family: 'Kaushan Script', cursive;\n}\n\n.title_loupe {\n\tline-height: 1;\n\tfont-size: 2.5rem;\n\tletter-spacing: 0.1rem;\n\ttext-transform: capitalize;\n\tline-height: 1.25;\n\tmargin-bottom: 0.75rem;\n\tfont-weight: 400;\n}\n\n.description_loupe {\n\tmax-width: 25em;\n\tline-height: 1.8;\n\tmargin-bottom: 1.25rem;\n\tcolor: hsl(210, 22%, 49%);\n}\n\n.basket_tap_loupe {\n\tbackground: hsl(21, 62%, 45%);\n\tcolor: #fff;\n\tborder-radius: 0.25rem;\n\tpadding: 0.375rem 0.75rem;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.1rem;\n\tdisplay: inline-block;\n\ttransition: all 0.3s linear;\n\tborder-color: transparent;\n\tcursor: pointer;\n}\n\n.basket_tap_loupe:hover {\n\tbackground: hsl(21, 65%, 59%);\n\tcolor: #222;\n}\n\n.black_li_menu {\n\tcolor: #222;\n}\n\n.menu_display_flex {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.block_products {\n\tmargin-top: 64px;\n\tmargin-bottom: 64px;\n\tdisplay: flex;\n\twidth: 90%;\n\tmax-width: 1170px;\n\tjustify-content: center;\n}\n\n#text_input {\n\tpadding: 0.5rem;\n\tbackground: hsl(210, 36%, 96%);\n\tborder-radius: 0.25rem;\n\tborder-color: transparent;\n\tletter-spacing: 0.1rem;\n\ttext-transform: capitalize;\n}\n\n.title_products {\n\tfont-weight: 500;\n\tmargin: 1.5rem 0 0.5rem;\n\tline-height: 1;\n\tfont-size: 1rem;\n\tletter-spacing: 0.1rem;\n\ttext-transform: capitalize;\n}\n\n.ul_products li {\n\tlist-style: none;\n\tcursor: pointer;\n\tdisplay: block;\n\tmargin: 0.25em 0;\n\tpadding: 0.25rem;\n\ttext-transform: capitalize;\n\tbackground: transparent;\n\tborder-color: transparent;\n\tletter-spacing: 0.1rem;\n\tcolor: hsl(210, 22%, 49%);\n\tcursor: pointer;\n\ttransition: all 0.3s linear;\n}\n\n.ul_products li:hover {\n\tcolor: hsl(209, 28%, 39%);\n}\n\n.value_price_input {\n\tmargin-bottom: 1.25rem;\n\tcolor: hsl(210, 22%, 49%);\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.sidebar {\n\tposition: sticky;\n\ttop: 1rem;\n\tmargin-right: 50px;\n}\n\n.block_products_flex {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n\n\n.basket_close {\n\ttransition: all 0.3s linear;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 400px;\n\tbackground: hsl(210, 36%, 96%);\n\tpadding: 3rem 1rem 0 1rem;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr auto;\n\n\ttransform: translateX(100%);\n\n\toverflow: scroll;\n\tz-index: 1000;\n}\n\n.basket_open {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 400px;\n\tbackground: hsl(210, 36%, 96%);\n\tpadding: 0rem 1rem 0 1rem;\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr auto;\n\ttransition: all 0.3s linear;\n\toverflow: scroll;\n\tz-index: 1000;\n}\n\n.display_flex_basket_product{\n    margin: 1rem 0;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    column-gap: 1.5rem;\n    align-items: center;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1rem;\n}\n.img_elem_basket_product img{\n    width: 75px;\n    height: 50px;\n    object-fit: cover;\n    border-radius: 0.25rem;\n}\n.title_elem_basket_product{\n    margin-bottom: 0.15rem;\n    line-height: 1;\n    font-size: 1rem;\n    letter-spacing: 0.1rem;\n    text-transform: capitalize;\n    font-weight: 400;\n}\n\n.price_elem_basket_product {margin-bottom: 0;\n    font-size: 0.75rem;\n    color: var(--clr-grey-3);\n    margin-top:0;\n}\n.button_elem_basket_product{\n    background: transparent;\n    border-color: transparent;\n    color: hsl(210, 22%, 49%);\n    letter-spacing: 0.1rem;\n    cursor: pointer;\n}\n.bi-caret-up {\n    background: transparent;\n    border-color: transparent;\n    color: hsl(21, 62%, 45%);\n    cursor: pointer;\n    font-size: 0.85rem;\n    padding: 0.25rem;\n}\n.bi-caret-down{\n    background: transparent;\n    border-color: transparent;\n    color: hsl(21, 62%, 45%);\n    cursor: pointer;\n    font-size: 0.85rem;\n    padding: 0.25rem;\n}\n.quantity_plus{\n    border: none;\n    background: none;\n}\n.quantity_minus{\n    border: none;\n    background: none;\n}\n.quantity_text_basket_product {\n    margin: 0;\n    text-align: center;\n    color: hsl(209, 34%, 30%);\n    line-height: 1;\n}\n.close_basket{\n    padding-top:15px ;\n    font-size: 40px;\n    font-weight: 900;\n    line-height: 20%;\n}\n.title_basket{\n    font-family: 'Kaushan Script', cursive;\n    font-weight: 500;\n    line-height: 1;\n    font-size: 1.75rem;\n    letter-spacing: 0.1rem;\n    text-transform: capitalize;\n    margin-bottom: 0.75rem;\n    text-align: center;\n}\n.basket_block_main{\n    display: flex;\n    flex-direction: column;\n\n}\n._prise_basket{\n    font-family: 'Kaushan Script', cursive;\n    font-weight: 500;\n    line-height: 1;\n    font-size: 1.75rem;\n    letter-spacing: 0.1rem;\n    text-transform: capitalize;\n    margin-bottom: 2rem;\n    text-align: center;\n}\n.basket_checkout{\n    display: block;\n    width: 75%;\n    margin: 0 auto;\n    margin-bottom: 3rem;\n    background: hsl(21, 62%, 45%);\n    color: #fff;\n    border-radius: 0.25rem;\n    padding: 0.375rem 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    transition: all 0.3s linear;\n    border-color: transparent;\n    cursor: pointer;\n}\n.basket_checkout:hover{\n    color: #222;\n    background: hsl(21, 65%, 59%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/app.js */ "./component/app.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./style.css");

// import{dataMenuLink} from "../component/data.js"


function Render({root, app}){
    this.render = ()=>{
        document.querySelector(root).insertAdjacentHTML("beforeend", app)
    }
}

const root = new Render({
    root: "#app",
    app: (0,_component_app_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})

root.render();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map