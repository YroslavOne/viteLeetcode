import { arrayaProductInStorega } from './parserProduct';
import { chekingis } from './product.js';
import createArrayCompanyProduct from './arrayCompanyProduct.js';
import {
  tapCompany,
  tapNameProduct,
  tapValuePrice,
} from '../addEventListener.js';
import { objFilter } from '../data.js';
import maxValuePrice from './maxPrice.js';
import cleaneProducts from './cleaneProducts.js';
import {tagForPage} from "../assemblyHtml/assemblyHtml.js"

function ProductMainHtml(elementHtml) {
  // tagForPage.div("","","","")
  const $divBreadCrumbs = tagForPage.div("breadCrumbs","breadCrumbsdiv","",elementHtml)
  const $pBreadCrumbs = tagForPage.p("", "breadCrumbs", "Home / Products", $divBreadCrumbs)
  const $divBlockProductsFlex = tagForPage.div("block_products_flex","block_products_flex","",elementHtml)
  const $divBlockProducts = tagForPage.div("block_products","block_productstag_div","",$divBlockProductsFlex)
  const $divFilterSidbar =   tagForPage.div("filter_sidbar","filter_sidbardiv","",$divBlockProducts)
  const $divSidebar = tagForPage.div("sidebar","sidebar","",$divFilterSidbar)
  const $inputTextInput = tagForPage.input("text_input","text_input_produtcs","search...",$divSidebar, "text")

  // const $divBlockProducts = document.createElement('div');
  // $divBlockProducts.className = 'block_products';
  // $divBlockProductsFlex.append($divBlockProducts);
  // const $divFilterSidbar = document.createElement('div');
  // $divFilterSidbar.className = 'filter_sidbar';
  // $divBlockProducts.append($divFilterSidbar);
  // const $divSidebar = document.createElement('div');
  // $divSidebar.className = 'sidebar';
  // $divFilterSidbar.append($divSidebar);
  // const $inputTextInput = document.createElement('input');
  // $inputTextInput.id = 'text_input';
  // $inputTextInput.type = 'text';
  // $inputTextInput.placeholder = 'search...';
  // $divSidebar.append($inputTextInput);
  text_input.oninput = function () {
    console.log(text_input.value);

    // tapNameProduct(text_input.value);
    cleaneProducts();
  };

  const $divSimplyTwo = document.createElement('div');
  $divSidebar.append($divSimplyTwo);

  const $h4TitleProductsCompany = document.createElement('h4');
  $h4TitleProductsCompany.id = 'title_products';
  $h4TitleProductsCompany.textContent = 'Company';
  $divSimplyTwo.append($h4TitleProductsCompany);

  const $divAllCompany = document.createElement('div');
  $divAllCompany.className = 'all_company';
  $divAllCompany.id = 'all_company';
  $divSimplyTwo.append($divAllCompany);

  const $ulProducts = document.createElement('ul');
  $ulProducts.className = 'ul_products';
  $divAllCompany.append($ulProducts);

  let arrayCompany = createArrayCompanyProduct(arrayaProductInStorega);
  arrayCompany.forEach((element) => {
    const $liFilterCompany = document.createElement('li');
    $liFilterCompany.className = `arraycompany_${element}`;
    $liFilterCompany.textContent = element;
    $ulProducts.append($liFilterCompany);

    const $thisClassLi = document.querySelector(`.arraycompany_${element}`);
    tapCompany($thisClassLi, element);
  });

  const $divSimplyOne = document.createElement('div');
  $divSidebar.append($divSimplyOne);

  const $h4TitleProductsPrice = document.createElement('div');
  $h4TitleProductsPrice.className = 'title_products';
  $h4TitleProductsPrice.textContent = 'Prise';
  $divSimplyOne.append($h4TitleProductsPrice);

  const $divSimply = document.createElement('div');
  $divSimplyOne.append($divSimply);

  const $inputvaluePriceInput = document.createElement('input');
  $inputvaluePriceInput.id = 'value_price_input';
  $inputvaluePriceInput.type = 'range';
  let arrayaProductInStor = JSON.parse(localStorage.storage);
  let maxValuePrices = maxValuePrice(arrayaProductInStor);
  $inputvaluePriceInput.max = maxValuePrices;
  $inputvaluePriceInput.value = maxValuePrices;
  $inputvaluePriceInput.step = '1';
  $divSimply.append($inputvaluePriceInput);

  const $pValuePriceInput = document.createElement('p');
  $pValuePriceInput.className = 'value_price_input';
  $pValuePriceInput.id = 'value_price_in_input';
  $pValuePriceInput.textContent = `Value: ${objFilter.priceProduct}`;
  $divSimply.append($pValuePriceInput);

  const $divCatalogPrice = document.createElement('div');
  $divCatalogPrice.className = 'catalog_block';
  $divCatalogPrice.id = 'catalog_block';
  $divBlockProducts.append($divCatalogPrice);

  const idValuePrise = document.getElementById('value_price_in_input');
  value_price_input.oninput = function () {
    tapValuePrice(value_price_input.value);
    idValuePrise.textContent = `Value: ${value_price_input.value}`;
    cleaneProducts();
  };

  chekingis(objFilter);
}
export default ProductMainHtml;
