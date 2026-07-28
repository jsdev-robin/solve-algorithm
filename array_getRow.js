function getRow(rowIndex) {
  const row = new Array(rowIndex + 1).fill(1);
  for (let i = 2; i <= rowIndex; i++) {
    for (let j = i - 1; j >= 1; j--) {
      row[j] += row[j - 1];
    }
  }
  return row;
}

function getValue(input) {
  let res = [];
  for (let i = 0; i < input; i++) {
    res.push(getRow(i));
  }
  return res;
}

console.log(getValue(5));
