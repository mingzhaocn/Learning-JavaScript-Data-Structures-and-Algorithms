const LinkedList = require('./LinkedList')
module.exports = class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head,
        previous,
        next,
        index = 0;
      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        current.prev = node;
        node.prev = previous;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
};
class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

