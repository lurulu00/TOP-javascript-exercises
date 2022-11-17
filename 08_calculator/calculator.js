const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numbers) {
  let sumOf = 0;
  numbers.forEach((number) => {
    sumOf += number;
  });
  return sumOf;
};

const multiply = function (numbers) {
  let productOf = 1;
  numbers.forEach((number) => {
    productOf *= number;
  });
  return productOf;
};

const power = function (a,b) {
  return a**b;
};

const factorial = function (number) {
  if(number){
    let result = 1;
    while(number >0){
      result *= number;
      number--;
    }
    return result;
  }
  return 1;
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
