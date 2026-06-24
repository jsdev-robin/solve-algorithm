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

// "5" → stack: [5]
// "2" → stack: [5,2]
// "C" → stack: [5]
// "D" → stack: [5,10]
// "+" → stack: [5,10,15]
// মোট = 5+10+15 = 30
