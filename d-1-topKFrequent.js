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

  const buckets = Array.from({ length: nums.length }, () => []);

  for (let [key, count] of freq) {
    buckets[count].push(key);
  }

  let result = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
