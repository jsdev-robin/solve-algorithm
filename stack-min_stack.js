class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    let min =
      this.minStack.length === 0
        ? x
        : Math.min(x, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

let ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
console.log(ms.getMin()); // 3
ms.pop();
ms.pop();
console.log(ms.getMin()); // 5
