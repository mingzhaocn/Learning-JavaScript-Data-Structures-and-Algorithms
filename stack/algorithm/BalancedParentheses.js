const Stack = require('../Stack');
/**
 * 平衡圆括号
 * @param Symbols
 * @returns {boolean|*}
 */
function parenthesesChecker(Symbols) {
  const opens = '{[(',
    closers = '}])',
    stack = new Stack();
  let balanced = true,
    index = 0;
  while (index < Symbols.length && balanced) {
    const curSymbol = Symbols[index];
    if (opens.indexOf(curSymbol) !== -1) {
      stack.push(curSymbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
        return;
      }
      let top = stack.pop();
      if (opens.indexOf(top) === closers.indexOf(curSymbol)) {
        // console.log(`current symbol is ${index} ${curSymbol} matched`)
      } else {
        balanced = false;
      }
    }
    index++;
  }
  return balanced && stack.isEmpty();
}

console.log(parenthesesChecker('{([])}')); //true
console.log(parenthesesChecker('{{([][])}()}')); //true
console.log(parenthesesChecker('[{()]')); //false