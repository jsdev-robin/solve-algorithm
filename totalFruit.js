console.log('Problem 7 — At Most 2 Distinct Fruits');
function totalFruit(fruits) {
  let map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      let f = fruits[left];
      map.set(f, map.get(f) - 1);
      if (map.get(f) === 0) map.delete(f);
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(totalFruit([1, 2, 1, 2, 3])); // 4
