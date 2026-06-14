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
