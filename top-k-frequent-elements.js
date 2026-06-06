/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freq = new Map();

  for (let num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const backets = Array.from({ length: nums.length + 1 }, () => []);

  for (let [num, count] of freq) {
    backets[count].push(num);
  }

  let result = [];

  for (let i = backets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...backets[i]);
  }

  return result.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
