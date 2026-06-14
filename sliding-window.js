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
