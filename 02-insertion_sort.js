function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    const j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}

const arr = [34, 12, 87, 45, 23, 67, 3, 91, 10, 56];

console.log(insertionSort(arr));
