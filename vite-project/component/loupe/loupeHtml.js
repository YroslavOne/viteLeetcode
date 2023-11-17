import getPriseWhitDot from '../product/priceWithDot.js'


function loupeHtml(elementHtml, filterArrayForLoupe){
const $divBreadCrumbs = document.createElement('div');
$divBreadCrumbs.className = "breadCrumbs";
elementHtml.appendChild($divBreadCrumbs);
const $pBreadCrumbs = document.createElement('p');
$pBreadCrumbs.id = "breadCrumbs";
$pBreadCrumbs.textContent = `Home / ${filterArrayForLoupe[0].fields.name}`;
$pBreadCrumbs.appendChild($divBreadCrumbs)
const $divCardItem = document.createElement('div');
$divCardItem.className = "cardItem";
$divCardItem.id = "cardItem";
elementHtml.append($divCardItem);
const $divBlockCardItem = document.createElement("div");
$divBlockCardItem.className = "block_cardItem"
$divCardItem.appendChild($divBlockCardItem);
const $divProductCardLoupe = document.createElement('div');
$divProductCardLoupe.className = "img_product_cart_loupe";
$divBlockCardItem.appendChild($divProductCardLoupe);
const $imgProductCardItem = document.createElement('img');
$imgProductCardItem.src = filterArrayForLoupe[0].fields.image[0].url;
$divProductCardLoupe.appendChild($imgProductCardItem);

const $divThisDiv = document.createElement('div');
$divBlockCardItem.appendChild($divThisDiv);
const $h1TitleLoupe = document.createElement('h1');
$h1TitleLoupe.className = "title_loupe";
$h1TitleLoupe.textContent = filterArrayForLoupe[0].fields.name;
$divThisDiv.appendChild($h1TitleLoupe);
const $h2CompanyLoupe = document.createElement('h2');
$h2CompanyLoupe.className = "company_loupe";
$h2CompanyLoupe.textContent = `By ${filterArrayForLoupe[0].fields.company}`;
$divThisDiv.appendChild($h2CompanyLoupe);
const $h3PriseLoupe = document.createElement('h3');
$h3PriseLoupe.className = "prise_loupe";
const $divColorFlex = document.createElement('div');
    $divColorFlex.className = "colorFlex";
    // $divColorFlex.style.backgroundColor = element;
    $divThisDiv.appendChild($divColorFlex);
$h3PriseLoupe.textContent = getPriseWhitDot(filterArrayForLoupe[0].fields.price);
$divThisDiv.appendChild($h3PriseLoupe);
filterArrayForLoupe[0].fields.colors.forEach((element) => {
    const $aColorElem = document.createElement('a');
    $aColorElem.className = "colorElem";
    $aColorElem.style.backgroundColor = element;
    $divColorFlex.appendChild($aColorElem);
});

const $pDiscriptionLoupe = document.createElement('p');
$pDiscriptionLoupe.className = "description_loupe";
$pDiscriptionLoupe.textContent = "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge";
$divThisDiv.appendChild($pDiscriptionLoupe);
const $buttonTapLoupe = document.createElement('button');
$buttonTapLoupe.className = "basket_tap_loupe";
$buttonTapLoupe.textContent = "add to cart";
$buttonTapLoupe.id = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
$divThisDiv.appendChild($buttonTapLoupe);



}

{/* <div class="breadCrumbs" >
<p id="breadCrumbs"></p>
</div> */}
{/* <div id="cardItem" class="cardItem"> */}
{/* <div class="block_cardItem"> */}
		{/* <div class="img_product_cart_loupe">
			<img src="${filterProduct[0].fields.image[0].url}" alt="">
		</div> */}
		{/* <div>
			<h1 class="title_loupe">${filterProduct[0].fields.name}</h1>
			<h2 class="company_loupe">By ${filterProduct[0].fields.company}</h2>
			<h3 class="prise_loupe">$${priceComma}</h3>
			<div class="colorFlex">
				${colorProduct}
			</div>
			<p class="description_loupe">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
		<button onclick=basketAdd("${filterProduct[0].id}") class="basket_tap_loupe">add to cart</button>
			</div>
		
		</div> */}
{/* </div> */}
export default loupeHtml;