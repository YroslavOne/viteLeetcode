export function getProducts(objFilter) {
    let url = `https://course-api.com/javascript-store-products`;
    fetch(url)
      .then((response) => response.json())
      .then((products) => arrayProduct(products, objFilter));
  }

  function arrayProduct(products, objFilter) {
    localStorage.storage = JSON.stringify(products)
    let arrayaProductInStorega = JSON.parse(localStorage.storage)
    console.log(objFilter)
    // arrayaProductInStorega.forEach((element) => {
    //   pageCheckForHome(element);
    // });
  }