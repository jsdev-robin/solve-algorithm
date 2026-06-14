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
