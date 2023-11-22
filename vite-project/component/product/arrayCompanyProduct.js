function createArrayCompanyProduct(arrayProduct) {
  let arrayCompanyProduct = ['All'];
  arrayProduct.forEach((element) => {
    let n = 0;
    for (let i = 0; i < arrayCompanyProduct.length; i++) {
      if (element.fields.company === arrayCompanyProduct[i]) {
        n = 1;
        return;
      }
    }

    if (n > 0) {
    } else {
      arrayCompanyProduct.push(element.fields.company);
    }
  });
  return arrayCompanyProduct;
}
export default createArrayCompanyProduct;
