class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  printList() {
    let curr = this.head;
    let listStr = '';

    while (curr) {
      listStr += curr.data + ' -> ';
      curr = curr.next;
    }

    listStr += 'null';
    console.log(listStr);
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log('Invalid index');
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let curr = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    newNode.next = curr;
    prev.next = newNode;

    this.size++;
  }

  removeFirst() {
    if (!this.head) return null;

    const removed = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;

    return removed.data;
  }

  removeLast() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      const removed = this.head;

      this.head = null;
      this.tail = null;
      this.size--;

      return removed.data;
    }

    let curr = this.head;

    while (curr.next !== this.tail) {
      curr = curr.next;
    }

    const removed = this.tail;

    curr.next = null;
    this.tail = curr;

    this.size--;

    return removed.data;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log('Invalid index');
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    let curr = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr.next;
    this.size--;

    return curr.data;
  }

  find(data) {
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.data === data) return index;

      curr = curr.next;
      index++;
    }

    return -1;
  }

  min() {
    if (!this.head) return null;

    let curr = this.head;
    let min = curr.data;

    while (curr) {
      if (curr.data < min) {
        min = curr.data;
      }

      curr = curr.next;
    }

    return min;
  }

  max() {
    if (!this.head) return null;

    let curr = this.head;
    let max = curr.data;

    while (curr) {
      if (curr.data > max) {
        max = curr.data;
      }

      curr = curr.next;
    }

    return max;
  }

  sum() {
    let curr = this.head;
    let sum = 0;

    while (curr) {
      sum += curr.data;
      curr = curr.next;
    }

    return sum;
  }

  average() {
    if (this.size === 0) return null;

    return this.sum() / this.size;
  }

  toArray() {
    let curr = this.head;
    let array = [];

    while (curr) {
      array.push(curr.data);
      curr = curr.next;
    }

    return array;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    this.tail = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(list.min());
console.log(list.max());
console.log(list.sum());
console.log(list.average());
console.log(list.toArray());

list.printList();
