/**
 * @desc LIFO last in first out
 * @type {Stack}
 */
module.exports = class Stack {
  constructor() {
    this.elements = [];
  }

  /**
   * 进栈
   * @param item
   * @returns {Number}
   */
  push(item) {
    return this.elements.push(item);
  }

  /**
   * 出栈
   * @returns {*}
   */
  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  clear() {
    this.elements = [];
  }

  print() {
    console.log(this.elements.toString());
  }
};
