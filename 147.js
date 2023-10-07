const maxProfit = function(prices) {
    let p = 0;
    for (let i = 1; i < prices.length; ++i) {
      let delta = prices[i] - prices[i - 1];
      if (delta > 0) {
        p += delta;
      }
    }
    return p;
  };
  
  // Example input prices
  const prices = [7, 1, 5, 3, 6, 4];
  
  // Calculate and print the maximum profit
  const maxProfitValue = maxProfit(prices);
  console.log(maxProfitValue);
  