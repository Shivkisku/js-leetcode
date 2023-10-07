const maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxP = 0;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxP) {
        maxP = prices[i] - minPrice;
      }
    }
  
    return maxP;
  };
  
  // Example input prices
  const prices = [7, 1, 5, 3, 6, 4];
  
  // Calculate and print the maximum profit
  const maxProfitValue = maxProfit(prices);
  console.log(maxProfitValue);
  