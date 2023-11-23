import getPriseWhitDot from '../product/priceWithDot.js';
import {busketAddAndOpen} from "../addEventListener.js"

function loupeHtml(elementHtml, filterArrayForLoupe) {
  const $divBreadCrumbs = document.createElement('div');
  $divBreadCrumbs.className = 'breadCrumbs';
  elementHtml.appendChild($divBreadCrumbs);
  const $pBreadCrumbs = document.createElement('p');
  $pBreadCrumbs.id = 'breadCrumbs';
  $pBreadCrumbs.textContent = `Home / ${filterArrayForLoupe[0].fields.name}`;
  $divBreadCrumbs.appendChild($pBreadCrumbs);
  const $divCardItem = document.createElement('div');
  $divCardItem.className = 'cardItem';
  $divCardItem.id = 'cardItem';
  elementHtml.appendChild($divCardItem);
  const $divBlockCardItem = document.createElement('div');
  $divBlockCardItem.className = 'block_cardItem';
  $divCardItem.appendChild($divBlockCardItem);
  const $divProductCardLoupe = document.createElement('div');
  $divProductCardLoupe.className = 'img_product_cart_loupe';
  $divBlockCardItem.appendChild($divProductCardLoupe);
  const $imgProductCardItem = document.createElement('img');
  $imgProductCardItem.src = filterArrayForLoupe[0].fields.image[0].url;
  $divProductCardLoupe.appendChild($imgProductCardItem);

  const $divThisDiv = document.createElement('div');
  $divBlockCardItem.appendChild($divThisDiv);
  const $h1TitleLoupe = document.createElement('h1');
  $h1TitleLoupe.className = 'title_loupe';
  $h1TitleLoupe.textContent = filterArrayForLoupe[0].fields.name;
  $divThisDiv.appendChild($h1TitleLoupe);
  const $h2CompanyLoupe = document.createElement('h2');
  $h2CompanyLoupe.className = 'company_loupe';
  $h2CompanyLoupe.textContent = `By ${filterArrayForLoupe[0].fields.company}`;
  $divThisDiv.appendChild($h2CompanyLoupe);
  const $h3PriseLoupe = document.createElement('h3');
  $h3PriseLoupe.className = 'prise_loupe';
  const $divColorFlex = document.createElement('div');
  $divColorFlex.className = 'colorFlex';
  $divThisDiv.appendChild($divColorFlex);
  $h3PriseLoupe.textContent = getPriseWhitDot(
    filterArrayForLoupe[0].fields.price
  );
  $divThisDiv.appendChild($h3PriseLoupe);
  filterArrayForLoupe[0].fields.colors.forEach((element) => {
    const $aColorElem = document.createElement('a');
    $aColorElem.className = 'colorElem';
    $aColorElem.style.backgroundColor = element;
    $divColorFlex.appendChild($aColorElem);
  });

  const $pDescriptionLoupe = document.createElement('p');
  $pDescriptionLoupe.className = 'description_loupe';
  $pDescriptionLoupe.textContent =
    'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge';
  $divThisDiv.appendChild($pDescriptionLoupe);
  const $buttonTapLoupe = document.createElement('button');
  $buttonTapLoupe.className = 'basket_tap_loupe';
  $buttonTapLoupe.textContent = 'add to cart';
  $buttonTapLoupe.id = 'basket_tap_loupe';
  $divThisDiv.appendChild($buttonTapLoupe);

  const $idButtonTapLoupe = document.getElementById("basket_tap_loupe")
  busketAddAndOpen($idButtonTapLoupe, filterArrayForLoupe[0].id);
}
export default loupeHtml;
