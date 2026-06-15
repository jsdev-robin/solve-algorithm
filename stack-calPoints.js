function calPoints(ops) {
  let stack = [];
  for (let op of ops) {
    if (op === 'C') {
      stack.pop();
    } else if (op === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(+op);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
