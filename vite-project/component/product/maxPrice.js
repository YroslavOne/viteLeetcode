function maxValuePrice(arrayProduct) {
    let maxValue = 0;
    arrayProduct.forEach((element) => {
      if (element.fields.price > maxValue) {
        maxValue = element.fields.price;
      }
    });
    console.log(maxValue)

    return maxValue;
  
    // $valuePriseInputRange.setAttribute('max', maxValue);
    // $valuePriseInputRange.setAttribute('value', maxValue);
    // priceProduct = maxValue;
    // valueInInput(maxValue);
  }

  export default maxValuePrice;