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
