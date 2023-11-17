// import { variableCard } from '../../variabel.js';
import {clicklinkMenu} from '../addEventListener.js'
// import { setupCounter } from '../../counter.js';
function menuLink(elemHtml, dataMenuLink) {
  dataMenuLink.forEach((element) => {
    // elHtml += `<li><a id="${element.title}" class="blackColorClass" >${element.title}</a></li>`

    const $elemLi = document.createElement('li');
    const $elemA = document.createElement('a');
    $elemA.id = `${element.title}`;
    $elemA.className = 'blackColorClass';
    const $contentElemA = document.createTextNode(element.title);
    $elemA.appendChild($contentElemA);
    $elemLi.append($elemA);
    elemHtml.append($elemLi);

    const $idElemTitle = document.getElementById(element.title)
    clicklinkMenu($idElemTitle, element.title)

    // document.body.insertBefore($elemLi, currentDiv);
  });
  //   let elHtml = ""
  //   dataMenuLink.forEach((element) => {
  // elHtml += `<li><a id="${element.title}" class="blackColorClass" >${element.title}</a></li>`
  //   })
  //     return elHtml;
}

// setupCounter(document.querySelector('#home'));
export default menuLink;
