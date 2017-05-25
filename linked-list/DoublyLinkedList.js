module.exports = class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
};
class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}