console.log('Problem 1 — Maximum Sum of K-size Subarray');
function maxSum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let max = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];

    windowSum -= arr[i - k];

    max = Math.max(max, windowSum);
  }

  return max;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3)); // 9

console.log('Problem 2 — Minimum Sum of K-size Subarray');
function minSum(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let min = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];
    min = Math.min(min, windowSum);
  }

  return min;
}

console.log(minSum([2, 1, 5, 1, 3, 2], 3)); // 6

console.log('Problem 3 — Average of Each K-size Window');
function avgSubarrays(arr, k) {
  let result = [];
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  result.push(windowSum / k);

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];

    result.push(parseFloat((windowSum / k).toFixed(2)));
  }

  return result;
}

console.log(avgSubarrays([1, 3, 2, 6, 4], 3)); // [2, 3.67, 4]

console.log('Problem 4 — Longest Substring Without Repeating Characters');
function longestSubstring(arr, k) {
  const map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < arr.length; right++) {
    if (map.has(arr[right])) {
      left = Math.max(left, map.get(arr[right]) + 1);
    }

    map.set(arr[right], right);
    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestSubstring('abcabcbb')); // 3

console.log('Problem 5 — Smallest Subarray with Sum >= Target');
function minSubarrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

console.log('Problem 6 — Longest Subarray with Sum <= K');
function longestSubarraySum(arr, k) {
  let left = 0;
  let sum = 0;
  let max = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestSubarraySum([3, 1, 2, 1, 1, 1, 1], 5)); // 4

console.log('Problem 7 — At Most 2 Distinct Fruits');
function totalFruit(fruits) {
  let map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      let f = fruits[left];
      map.set(f, map.get(f) - 1);
      if (map.get(f) === 0) map.delete(f);
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(totalFruit([1, 2, 1, 2, 3])); // 4

console.log('Problem 8 — Longest Substring with At Most K Distinct Characters');
function longestKDistinct(s, k) {
  const map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      let f = s[left];
      map.set(f, map.get(f) - 1);
      if (map.get(f) === 0) map.delete(f);
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestKDistinct('araaci', 2)); // 4
