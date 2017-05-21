/**
 * 链表
 * @type {LinkedList}
 */
module.exports = class LinkedList {

  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insert(element, position) {
    if (position > -1 && position < this.length) {
      const node = new Node(element);
      var current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        this.head = node;
        this.head.next = current;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }

      this.length++;
    } else {
      return false
    }
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  indexOf(element) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let current = this.head,
      str = '';
    while (current) {
      str += "," + current.element;
      current = current.next;
    }
    return str.slice(1);
  }

  print() {
    console.log(this.toString())
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}