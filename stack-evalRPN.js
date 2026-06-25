function evalRPN(tokens) {
  let stack = [];

  for (let t of tokens) {
    if (['+', '-', '*', '/'].includes(t)) {
      let a = stack.pop();
      let b = stack.pop();
      if (t === '+') stack.push(a + b);
      if (t === '-') stack.push(a - b);
      if (t === '*') stack.push(a * b);
      if (t === '/') stack.push(Math.trunc(a / b));
    } else {
      stack.push(+t);
    }
  }

  return stack.pop();
}

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
