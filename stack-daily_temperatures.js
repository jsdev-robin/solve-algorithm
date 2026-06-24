function dailyTemperatures(temps) {
  let stack = [];
  let result = new Array(temps.length).fill(0);

  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]
