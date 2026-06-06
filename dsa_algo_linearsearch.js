function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([3, 20, 1, 6, 8, 2, 9, 1, 10, 9, 7], 10));
