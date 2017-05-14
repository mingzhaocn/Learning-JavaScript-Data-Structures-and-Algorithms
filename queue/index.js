const PriorityQueue = require('./PriorityQueue');

const priorityQueue = new PriorityQueue();
// priorityQueue.print();
priorityQueue.enqueue('Star Load', 2);
priorityQueue.enqueue('Gamora', 1);
priorityQueue.enqueue('Drax the Destroye', 1);
priorityQueue.enqueue('Rocket Raccoon', 2);
priorityQueue.enqueue('Yondu Udonta', 3);
priorityQueue.print();

console.log(priorityQueue.size())
// console.log(priorityQueue.elements)