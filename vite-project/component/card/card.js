import cardProduct from './cardProduct';
import { cardClose } from '../addEventListener.js';
import { basketProductArray } from './checkCard';
import { cardSumAllProduct } from './cardSumAllProduct';

function card() {
  const $basketOpen = document.getElementById('basket_open');

  const $blockBasket = document.createElement('div');
  $blockBasket.className = 'block_basket';
  $blockBasket.id = 'block_basket';
  $basketOpen.append($blockBasket);
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
  const $h3TitleBasket = document.createElement('h3');
  $h3TitleBasket.className = 'title_basket';
  $h3TitleBasket.textContent = 'Your Bag';
  $basketBlockMain.append($h3TitleBasket);
  const $blockBasketProduct = document.createElement('div');
  $blockBasketProduct.className = 'block_basket_product';
  $blockBasketProduct.id = 'block_basket_product';
  $basketBlockMain.append($blockBasketProduct);
  const $elemBlockBasketProduct = document.getElementById(
    'block_basket_product'
  );
  basketProductArray.forEach((elementArray, index) => {
    cardProduct($elemBlockBasketProduct, elementArray, index);
  });

  const $divPraiseBasket = document.createElement('div');
  $divPraiseBasket.className = 'div_prise_basket';
  $basketBlockMain.append($divPraiseBasket);
  const $pPraiseBasket = document.createElement('p');
  $pPraiseBasket.className = '_prise_basket';
  $pPraiseBasket.textContent = `Total: $${cardSumAllProduct()}`;
  $divPraiseBasket.append($pPraiseBasket);

  const $buttonBasketChekout = document.createElement('button');
  $buttonBasketChekout.className = 'basket_checkout';
  $buttonBasketChekout.textContent = 'checkout';
  $basketBlockMain.append($buttonBasketChekout);

  const $clickElemCloseBasket = document.getElementById('toDoBasketClose');
  cardClose($clickElemCloseBasket);
}

export default card;
