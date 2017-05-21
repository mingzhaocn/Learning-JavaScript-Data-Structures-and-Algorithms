const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(5);
linkedList.append(10);
console.log('append:', linkedList.toString())//1,5,10

// linkedList.insert(8, 2)
console.log('insert:', linkedList.toString())//

linkedList.removeAt(2)
console.log('removeAt:', linkedList.toString())//

linkedList.insert(3, 1)
console.log('insert:', linkedList.toString())//
console.log('indexOf:', linkedList.indexOf(3))//

linkedList.remove(1)
console.log('remove:', linkedList.toString())//


