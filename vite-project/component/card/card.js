import cardProduct from './cardProduct';

function card(elemHtml) {
  const $busketOpen = document.createElement('div');
  $busketOpen.id = 'basket_open';
  elemHtml.append($busketOpen);

  const $blockBasket = document.createElement('div');
  $blockBasket.className = 'block_basket';
  $busketOpen.append($blockBasket);
  const $closeBasket = document.createElement('div');
  $closeBasket.className = 'close_basket';
  $closeBasket.id = 'toDoBasketClose';
  $blockBasket.append($closeBasket);
  const $iBasket = document.createElement('i');
  $iBasket.className = 'bi bi-x';
  $closeBasket.append($iBasket);
  const $basketBlockMain = document.createElement('div');
  $basketBlockMain.className = 'basket_block_main';
  $blockBasket.append($basketBlockMain);
  const $h3TitleBascet = document.createElement('h3');
  $h3TitleBascet.className = 'title_basket';
  $h3TitleBascet.textContent = 'Your Bag';
  $basketBlockMain.append($h3TitleBascet);
  const $blockBasketProduct = document.createElement('div');
  $blockBasketProduct.className = 'block_basket_product';
  $blockBasketProduct.id = 'block_basket_product';
  $basketBlockMain.append($blockBasketProduct);
  const $elemBlockBasketProduct = document.getElementById(
    'block_basket_product'
  );
  $blockBasketProduct.append(cardProduct());

  const $divPraiseBasket = document.createElement('div');
  $divPraiseBasket.className = 'div_prise_basket';
  $basketBlockMain.append($divPraiseBasket);
  const $pPraiseBasket = document.createElement('p');
  $pPraiseBasket.className = '_prise_basket';
  $pPraiseBasket.textContent = `Total : $сумма`;
  $divPraiseBasket.append($pPraiseBasket);

  const $buttonBasketChekout = document.createElement('button');
  $buttonBasketChekout.className = 'basket_checkout';
  $buttonBasketChekout.textContent = 'checkout';
  $basketBlockMain.append($buttonBasketChekout);

  const $clickElemCloseBasket = document.getElementById('toDoBasketClose');
  $clickElemCloseBasket.addEventListener('click', () => {
    console.log('closeBasket');
  });
}

export default card;
