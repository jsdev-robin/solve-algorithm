function intersection(nums1, nums2) {
  const set = new Set(nums1);
  return [...new Set(nums2.filter((n) => set.has(n)))];
}
