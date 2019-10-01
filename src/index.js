module.exports = function multiply(first, second) {
  // your solution
  let firstNumber = BigInt(first);
  let secondNumber = BigInt(second);

  let multiplyStr = (firstNumber * secondNumber)+ '';
  return multiplyStr;
}
