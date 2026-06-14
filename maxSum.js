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
