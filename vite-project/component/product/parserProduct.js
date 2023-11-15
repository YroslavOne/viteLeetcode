import prodactHtml from "./prodactHtml"

export function getProducts(objFilter) {
    let url = `https://course-api.com/javascript-store-products`;
    fetch(url)
      .then((response) => response.json())
      .then((products) => arrayProduct(products, objFilter));
  }

  function arrayProduct(products, objFilter) {
    localStorage.storage = JSON.stringify(products)
    let arrayaProductInStorega = JSON.parse(localStorage.storage)
    arrayaProductInStorega.forEach((element) => {
        pageCheckForHome(element, objFilter);
      });
  }

  function pageCheckForHome(productsFeatured, objFilter) {
    console.log(productsFeatured.fields.image[0].url)
    const $idElemCatalogHtml = document.getElementById('catalog_block')
    if (productsFeatured.fields.featured === objFilter.featured) {
    let imageForProduct = productsFeatured.fields.image[0].url;
    let idForProduct = productsFeatured.id
    let nameForProduct = productsFeatured.fields.name
    let priseForProduct = productsFeatured.fields.price
        prodactHtml($idElemCatalogHtml, imageForProduct, idForProduct, nameForProduct, priseForProduct);
    }
  }