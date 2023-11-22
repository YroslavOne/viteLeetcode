import { filterById } from './loupe/loupeManipulation.js';
import cleanPage from './cleanPage.js';
import backgroundForPage from './menu/backgroundForPage.js';
function loupe(id) {
  cleanPage();
  const $app = document.getElementById('app');
  let backgroundLinkMune = 'black_li_menu';
  let Backgroundcard = '#222';
  let logo = 'https://vanilla-js-store.netlify.app/images/logo-black.svg';
  backgroundForPage(backgroundLinkMune, Backgroundcard, logo);
  filterById($app, id);
}
export default loupe;
