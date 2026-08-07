// Rotate Array (LC 189)
function rotate(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}
function reverse(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// nums = [1,2,3,4,5,6,7], k = 3 → output → [5,6,7,1,2,3,4]
///////////////  ^
