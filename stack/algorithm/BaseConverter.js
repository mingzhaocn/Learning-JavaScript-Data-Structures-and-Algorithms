/**
 * 十进制转换为其他进制
 * @param decNumber
 * @param base
 */

const Stack = require('../Stack');

function baseConverter(decNumber, base) {
  let convertedString = "";
  const remStack = new Stack(),
    digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    remStack.push(decNumber % base);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    convertedString += digits[remStack.pop()];
  }
  return convertedString;
}

console.log('1024(10) -> X(2) : ', baseConverter(1024, 2));//10000000000