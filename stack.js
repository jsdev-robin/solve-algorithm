console.log('Problem 1 — Valid Parentheses (Basic)');

function isValid(s) {
  let stack = [];
  let map = { ')': '(', ']': '[', '}': '{' };

  for (let c of s) {
    if (c == '(' || c == '[' || c == '{') {
      stack.push(c);
    } else {
      if (stack.pop() !== map[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid('()[]{}')); // true
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true

console.log('Problem 2 — Min Stack (Basic)');
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
// ms.pop();
// ms.pop();
// console.log(ms.getMin()); // 5
console.log(ms.peek());

console.log('Problem 3 — Reverse a String using Stack (Basic)');
function reverseString(s) {
  let stack = [];

  for (let c of s) {
    stack.push(c);
  }

  let result = '';
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

console.log(reverseString('hello')); // "olleh"
