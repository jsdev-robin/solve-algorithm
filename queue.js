class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.front()); // 2
