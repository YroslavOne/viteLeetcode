import { clickLinkMenu } from '../addEventListener.js';

function menuLink(elemHtml, dataMenuLink) {
  dataMenuLink.forEach((element) => {
    const $elemLi = document.createElement('li');
    const $elemA = document.createElement('a');
    $elemA.id = `${element.title}`;
    const $contentElemA = document.createTextNode(element.title);
    $elemA.appendChild($contentElemA);
    $elemLi.append($elemA);
    elemHtml.append($elemLi);

    const $idElemTitle = document.getElementById(element.title);
    clickLinkMenu($idElemTitle, element.title);
  });
}

export default menuLink;
