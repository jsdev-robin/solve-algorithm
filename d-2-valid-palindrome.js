/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = clean.split('').reverse().join('');

  return clean === reversed;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
