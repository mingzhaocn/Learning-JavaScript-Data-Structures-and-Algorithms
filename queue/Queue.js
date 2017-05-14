/**
 * FIFO first in first out
 * @type {Queue}
 */
module.exports = class Queue {
  constructor() {
    this.elements = [];
  }

  /**
   * 入列
   * @param elements
   */
  enqueue(element) {
    this.elements.push(element);
  }

  /**
   * 出列
   * @returns {*}
   */
  dequeue() {
    return this.elements.shift();
  }

  /**
   * 返回队列的第一个元素
   * @returns {*}
   */
  front() {
    return this.elements[0]
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  print() {
    console.log(JSON.stringify(this.elements));
    // console.log(this.elements.toString());
  }
}