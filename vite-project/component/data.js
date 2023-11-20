import {arrayaProductInStorega} from "./product/parserProduct.js"
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

export let objFilter = {
    featured: null,
    nameProduct: null,
    priceProduct: maxValuePrice(arrayaProductInStorega),
    companyProduct: "All",
};

