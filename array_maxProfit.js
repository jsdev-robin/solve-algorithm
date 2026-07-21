function maxProfit(prices) {
  let minPrice = Infinity;
  let profit = 0;
  for (let p of prices) {
    minPrice = Math.min(minPrice, p);
    profit = Math.max(profit, p - minPrice);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
