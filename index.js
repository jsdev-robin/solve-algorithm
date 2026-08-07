function intersection(nums1, nums2) {
  let a = new Set(nums1);
  let b = new Set(nums2);

  const x = [...a.intersection(b)];

  console.log(x);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
