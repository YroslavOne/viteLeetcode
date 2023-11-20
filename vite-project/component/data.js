// import {arrayaProductInStorega} from "./product/parserProduct.js"
import maxValuePrice from "./product/maxPrice";

export let dataMenuLink = [
    {
        title: "Home",
        href: "/home.html",
        
    },
    {
        title: "Product",
        href: "/product.html",
    },
    {
        title: "About",
        href: "/product.html",
    },
];
let arrayaProductInStor = JSON.parse(localStorage.storage)
export let objFilter = {
    featured: null,
    nameProduct: null,
    priceProduct: maxValuePrice(arrayaProductInStor),
    companyProduct: "All",
};

