const candy = function(ratings) {
    const candies = new Array(ratings.length).fill(1);
  
    // First pass: Traverse from left to right to satisfy condition 2
    for (let i = 1; i < candies.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
        candies[i] = candies[i - 1] + 1;
      }
    }
  
    let totalCandies = candies[candies.length - 1]; // Total candies needed so far
  
    // Second pass: Traverse from right to left to satisfy condition 2 and maximize candies
    for (let i = candies.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
        candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      }
      totalCandies += candies[i];
    }
  
    return totalCandies;
  };
  
  // Example usage:
  const ratings = [1, 0, 2];
  const totalCandies = candy(ratings);
  console.log("Total candies needed:", totalCandies);
  