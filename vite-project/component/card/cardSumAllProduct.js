import { basketProductArray } from "./checkCard";
let sumPriceProduct = 0
export function cardSummAllProduct(){
    sumPriceProduct = 0
    basketProductArray.forEach((element)=>{
        sumPriceProduct += element.price*element.quantity
    })
    return sumPriceProduct
}