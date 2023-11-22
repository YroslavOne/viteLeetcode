import getPriseWhitDot from './priceWithDot.js';

function maxValuePrice(arrayProduct) {
  let maxValue = 0;
  arrayProduct.forEach((element) => {
    if (element.fields.price > maxValue) {
      maxValue = element.fields.price;
    }
  });
  maxValue = Math.ceil(Number(getPriseWhitDot(maxValue)));

  return maxValue;
}

export default maxValuePrice;
