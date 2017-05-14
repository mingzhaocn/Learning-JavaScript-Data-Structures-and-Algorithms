/**
 * 优先队列
 * 这里实现的最小优先队列，优先级值越小优先级越高。
 * @type {PriorityQueue}
 */
module.exports = class PriorityQueue extends require('./Queue') {

  constructor() {
    super();
  }

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    if (this.elements.length === 0) {
      this.elements.push(queueElement);
    }
    const added = this.elements.some((element, index, array) => {
      if (queueElement.priority < element.priority) {
        array.splice(index, 0, queueElement);
        return true;
      }
    })
    if (!added) {
      this.elements.push(queueElement);
    }
  }
}
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}