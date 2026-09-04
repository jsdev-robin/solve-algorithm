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
      console.log('Invalid Index');
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
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(5);
list.insertAt(40, 5);
console.log(list.removeFrist());

list.printList();
