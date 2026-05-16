const convertMilesToKm = (miles) => {
  return miles * 1.6;
};

const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const inchesToMetres = (inches) => {
  return inches * 0.0254;
};

const poundsToKilograms = (pounds) => {
  return pounds * 0.453592;
};

module.exports = {
  convertMilesToKm,
  fahrenheitToCelsius,
  inchesToMetres,
  poundsToKilograms
};