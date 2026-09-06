class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
    }

    this.size++;
  }

  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
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

    let newNode = new Node(data);
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

  removeFrist() {
    if (!this.head) return null;
    let removed = this.head;
    this.head = this.head.next;
    this.size--;

    return removed.data;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      let removed = this.head;
      this.head = null;
      this.size--;
      return removed.data;
    }

    let curr = this.head;
    let prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    this.size--;
    return curr.data;
  }

  remvoeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log('Invalid index');
      return null;
    }

    if (index === 0) return this.removeFirst();

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
    let res = this.head.data;

    while (curr) {
      res = Math.min(res, curr.data);
      curr = curr.next;
    }

    return res;
  }

  max() {
    if (!this.head) return null;
    let curr = this.head;
    let res = this.head.data;

    while (curr) {
      res = Math.max(res, curr.data);
      curr = curr.next;
    }

    return res;
  }

  sum() {
    if (!this.head) return null;
    let curr = this.head;
    let res = 0;

    while (curr) {
      res += curr.data;
      curr = curr.next;
    }

    return res;
  }

  average() {
    if (!this.head) return null;
    let curr = this.head;
    let res = 0;

    while (curr) {
      res += curr.data;
      curr = curr.next;
    }

    return res / this.size;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(5);
list.insertAt(60, 5);
list.reverse();

console.log(list.min());
console.log(list.max());
console.log(list.sum());
console.log(list.average());

list.printList();
