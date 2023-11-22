import {arrayaProductInStorega} from "../product/parserProduct.js"
import loupeHtml from './loupeHtml.js'
const $htmlGenerateBreadCrumbs = document.getElementById('breadCrumbs');
const $htmlGenerateTitle = document.getElementById('breadTitle');
const $htmlGenerateCardItem = document.getElementById('cardItem');


export function filterById(elementHtml, idLoupe) {
  let filterProduct = arrayaProductInStorega.filter((item) => item.id === idLoupe);
  loupeHtml(elementHtml, filterProduct);
}
