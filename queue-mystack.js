class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);
    let size = this.queue.length;
    while (size > 1) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}

let st = new MyStack();
st.push(1);
st.push(2);
st.push(3);
console.log(st.pop()); // 3
console.log(st.top()); // 2
