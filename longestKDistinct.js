console.log('Problem 8 — Longest Substring with At Most K Distinct Characters');
function longestKDistinct(s, k) {
  let map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(longestKDistinct('araaci', 2)); // 4
