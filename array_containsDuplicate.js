function containsDuplicate(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));

// function containsDuplicate(nums) {
//   return new Set(nums).size !== nums.length;
// }
