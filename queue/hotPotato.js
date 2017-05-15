const Queue = require('./Queue');
/**
 * 循环队列--击鼓传花
 * @param names
 * @param passTimes
 */
function hotPotato(names, passTimes) {
  const queue = new Queue();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < passTimes; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();//被淘汰
  }
  return queue.dequeue();
}
const names = ['John', ' Jack', ' Camila', ' Ingrid', ' Carl'];
const winner = hotPotato(names, 7);
console.log(`winner is ${winner}`)
