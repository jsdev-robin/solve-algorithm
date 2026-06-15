function containsDuplicate(nums) {
  let stack = [];
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
    stack.push(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
