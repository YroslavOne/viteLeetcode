function getPriseWhitDot(prise) {
  let resultValue;
  let maxValueStartTwoSymble = String(prise).slice(0, -2);
  let maxValueEndTwoSymble = String(prise).slice(-2);
  resultValue = Number(maxValueStartTwoSymble + '.' + maxValueEndTwoSymble);
  return resultValue;
}
export default getPriseWhitDot;
