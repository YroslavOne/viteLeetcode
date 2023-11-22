import {dataMenuLink} from "../data.js"

function backgroundForPage(backgroundLinkMenu, Backgroundcard, logo){
    dataMenuLink.forEach((element)=>{
        const $idLinkMenu = document.getElementById(element.title)
        console.log(`chekin ${element.title}`)
        $idLinkMenu.className = backgroundLinkMenu;
    })
    const $idCard = document.getElementById('biCard');
    $idCard.style.color = Backgroundcard;

    const $idLogoMenu = document.getElementById('logoMenu');
    $idLogoMenu.src = logo
}
export default backgroundForPage