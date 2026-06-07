/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log('=====================isPalindrome===============================');
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] === clean[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));

console.log('=====================reverseArray===============================');
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function reverseArray(nums) {
  return nums;
}

console.log(reverseArray([5, 2, 3, 4, 1]));
