/**
 * 十进制转换为其他进制
 * @param decNumber
 * @param base
 */
const Stack = require('../Stack');
module.exports = function baseConverter(decNumber, base) {
  let convertedString = "";
  const remStack = new Stack();
  const digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    remStack.push(decNumber % base);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    convertedString += digits[remStack.pop()];
  }
  return convertedString;
}