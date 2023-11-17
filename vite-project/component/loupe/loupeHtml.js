function loupeHtml(elementHtml, filterArrayForLoupe){
const $divBreadCrumbs = document.createElement('div');
$divBreadCrumbs.className = "breadCrumbs"
elementHtml.append($divBreadCrumbs);
const $pBreadCrumbs = document.createElement('p');
$pBreadCrumbs.id = "breadCrumbs"
$pBreadCrumbs.textContent = "ААААААААААААААААААА";
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
$imgProductCardItem.src = "AAAAAAAAAAAAAAAAAAAAAAA";
const $divThisDiv = document.createElement('div');
$divBlockCardItem.appendChild($divThisDiv);
const $h1TitleLoupe = document.createElement('h1');
$h1TitleLoupe.className = "title_loupe";
$h1TitleLoupe.textContent = "AAAAAAAAAAAAAAAAAAAAAAA";
$divThisDiv.appendChild($h1TitleLoupe);
const $h2CompanyLoupe = document.createElement('h2');
$h2CompanyLoupe.className = "company_loupe";
$h2CompanyLoupe.textContent = "By AAAAAAAAAAAAAAAAAAAAAAA";
$divThisDiv.appendChild($h2CompanyLoupe);
const $h3PriseLoupe = document.createElement('h3');
$h3PriseLoupe.className = "prise_loupe";
$h3PriseLoupe.textContent = "$AAAAAAAAAAAAAAAAAAAAAAA";
$divThisDiv.appendChild($h3PriseLoupe);
const $divColorFlex = document.createElement('div');
$divColorFlex.className = "colorFlex";
$divColorFlex.textContent = "AAAAAAAAAAAAAAAAAAAAAAA";
$divThisDiv.appendChild($divColorFlex);
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