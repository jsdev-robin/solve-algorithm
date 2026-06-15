function removeDuplicates(s) {
  let stack = [];

  for (let c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
}

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));
