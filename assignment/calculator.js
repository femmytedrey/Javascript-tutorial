const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
  power: (a, b) => {
    return a ** b;
  },
  remainder: function (a, b) {
    return a % b;
  },
};

console.log(calculator.remainder(5, 3));

const reusableCalculator = (operations, a, b) => {
  switch (operations) {
    case "add":
      console.log(calculator.add(a, b));
      break;
    case "subtract":
      console.log(calculator.subtract(a, b));
      break;
    case "multiply":
      console.log(calculator.multiply(a, b));
      break;
    case "divide":
      console.log(calculator.divide(a, b));
      break;
    case "power":
      console.log(calculator.power(a, b));
      break;
    case "remainder":
      console.log(calculator.remainder(a, b));
      break;
    default:
      console.log("Invalid operation");
  }
};

reusableCalculator("add", 2, 3);
reusableCalculator("subtract", 5, 2);
reusableCalculator("multiply", 3, 4);
reusableCalculator("divide", 10, 2);
reusableCalculator("power", 2, 3);
reusableCalculator("remainder", 5, 3);
