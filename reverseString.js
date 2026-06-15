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
