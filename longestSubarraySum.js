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
