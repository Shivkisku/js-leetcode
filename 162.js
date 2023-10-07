const singleNumber = function(nums) {
    const hash = {};
    
    nums.forEach(el => {
      hash[el] = (hash[el] && hash[el] + 1) || 1;
    });
    
    for (let el in hash) {
      if (hash[el] === 1) return +el;
    }
  };
  
  // Example usage:
  const nums = [4, 1, 2, 1, 2];
  const result = singleNumber(nums);
  console.log("The single number is:", result);
  