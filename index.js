const nums1 = [1, 2, 2, 1];
const map = new Map();
for (const n of nums1) {
  map.set(n, (map.get(n) || 0) + 1);
}

console.log(map);
