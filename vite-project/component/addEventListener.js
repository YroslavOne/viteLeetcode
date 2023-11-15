export function cheking(idelement){
    idelement.addEventListener('click', () => console.log("hi men"))
}

export function cardClose(elemHtml){
    elemHtml.addEventListener('click', () => {
        const $busketClose = document.getElementById("basket_open")
        $busketClose.className = "basket_close"
      });
}
