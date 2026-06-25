class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.size = k;
    this.front = 0;
    this.count = 0;
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    } else {
      let rear = (this.front + this.count) % this.size;
      this.queue[rear] = value;
      this.count++;
      return true;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.front = (this.front + 1) % this.size;
      this.count--;
      return true;
    }
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) return -1;
    let rear = (this.front + this.count - 1) % this.size;
    return this.queue[rear];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}

let cq = new MyCircularQueue(3);
console.log(cq.enQueue(1)); // true
console.log(cq.enQueue(2)); // true
console.log(cq.enQueue(3)); // true
console.log(cq.enQueue(4)); // false
console.log(cq.deQueue()); // true
console.log(cq.enQueue(4)); // true
