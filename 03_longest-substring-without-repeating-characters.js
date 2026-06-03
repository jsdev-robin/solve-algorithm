function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];

    map.set(currentS, i);
  }
}

console.log(lengthOfLongestSubstring('abcabcbb'));
