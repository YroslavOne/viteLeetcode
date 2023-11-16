

function removeItemBasket(indexArr){
    arrayProductsBaskets.splice(indexArr, 1);
    localStorage.basketProduct = JSON.stringify(arrayProductsBaskets)
    basketOpen()
}

function productPlus(indexArr){
    arrayProductsBaskets[indexArr].quantity++
    localStorage.basketProduct = JSON.stringify(arrayProductsBaskets)
    basketOpen()
}

function productMinus(indexArr){
    arrayProductsBaskets[indexArr].quantity--
    if(arrayProductsBaskets[indexArr].quantity ===0){
        removeItemBasket(indexArr)
    } else{
        localStorage.basketProduct = JSON.stringify(arrayProductsBaskets)
        basketOpen()
    }
    
}