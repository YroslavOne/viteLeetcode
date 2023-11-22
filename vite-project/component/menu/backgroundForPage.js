import { dataMenuLink } from '../data.js';

function backgroundForPage(backgroundLinkMenu, BackgroundCard, logo) {
  dataMenuLink.forEach((element) => {
    const $idLinkMenu = document.getElementById(element.title);
    $idLinkMenu.className = backgroundLinkMenu;
  });
  const $idCard = document.getElementById('biCard');
  $idCard.style.color = BackgroundCard;

  const $idLogoMenu = document.getElementById('logoMenu');
  $idLogoMenu.src = logo;
}
export default backgroundForPage;
