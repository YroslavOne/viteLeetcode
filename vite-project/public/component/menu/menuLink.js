// import { variableCard } from '../../variabel.js';
// import { setupCounter } from '../../counter.js';

export function menuLink(dataMenuLink) {
    let elHtml = ""
    dataMenuLink.forEach((element) => {
  elHtml += `<li><a id="${element.title}" class="blackColorClass" >${element.title}</a></li>`
    })
      return elHtml;
    }

    // setupCounter(document.querySelector('#home'));