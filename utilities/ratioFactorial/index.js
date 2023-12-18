const ratioVal = require("../ratio/index");
const factorialVal = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioVal(num1, num2);
  const factorial = factorialVal(num3);

  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
