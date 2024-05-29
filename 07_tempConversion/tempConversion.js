const convertToCelsius = function (fahrenheit) {
  return round(((fahrenheit - 32) * 5 / 9), 1);    //* precision set to show 1 decimal
};

const convertToFahrenheit = function (celsius) {
  return round((celsius / 5 * 9 + 32), 1);      //* precision set to show 1 decimal
};

// function that rounds a number to the required precision   //* As explained @ https://stackoverflow.com/q/7342957/5433628
function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
