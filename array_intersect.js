function intersect(nums1, nums2) {
  let map = new Map();

  for (let n of nums1) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  let res = [];

  for (let n of nums2) {
    if (map.get(n) > 0) {
      res.push(n);
      map.set(n, map.get(n) - 1);
    }
  }

  return res;
}

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
