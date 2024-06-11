const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(((sum, current) => sum + current), 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function (a, b) {
  return a ** b;    // alternatively Math.pow(a,b)
};

const factorial = function (x) {
  let result = 1;    // in the case of x === 0 the result is equal to 1 so we can just initialize the variable from it's lowest value and don't insert the case x = 0 in the loop
  for (i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
