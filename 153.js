const longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);
    let max = 1;
    let cur = 1;
    
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] - nums[i-1] === 1) {
        cur += 1;
        max = Math.max(max, cur);
      } else if(nums[i] - nums[i-1] === 0) {
        // Ignore duplicates
      } else {
        cur = 1;
      }
    }
    
    return max;
  };
  
  // Example usage:
  const nums = [100, 4, 200, 1, 3, 2];
  const result = longestConsecutive(nums);
  console.log(result);
  