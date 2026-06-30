function timeRequiredToBuy(tickets, k) {
  let queue = tickets.map((t, i) => [i, t]);
  let time = 0;

  while (queue.length) {
    let [idx, count] = queue.shift();
    time++;
    count--;

    if (count === 0) {
      if (idx === k) break;
    } else {
      if (idx === k && count === 0) break;
      queue.push([idx, count]);
    }
  }

  return time;
}

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
