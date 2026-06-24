function process(str) {
  let stack = [];
  for (s of str) {
    if (s === '#') {
      stack.pop();
    } else {
      stack.push(s);
    }
  }

  return stack.join('');
}

function backspaceCompare(s, t) {
  return process(s) === process(t);
}

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a#c', 'b')); // false
