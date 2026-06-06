function subarraySum(nums: number[], k: number): number {
  // {prefixSum: count} — কতবার এই sum আগে দেখেছি
  const map = new Map<number, number>();

  // sum=0 একবার দেখেছি (কোনো element নেওয়ার আগে)
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num; // এখন পর্যন্ত যোগফল

    const needed = prefixSum - k; // এই sum আগে থাকলেই একটা valid subarray পাব

    if (map.has(needed)) {
      count += map.get(needed)!; // যতবার ছিল, ততটা subarray পেলাম
    }

    map.set(prefixSum, (map.get(prefixSum) ?? 0) + 1); // এই prefixSum কে map এ রাখলাম
  }

  return count;
}
