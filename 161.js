const singleNumber = function(nums) {
    let xor = nums[0];
    for (let i = 1; i < nums.length; i++) {
      xor ^= nums[i];
    }
    return xor;
  };
  
  // Example usage:
  const nums = [4, 1, 2, 1, 2];
  const result = singleNumber(nums);
  console.log("The single number is:", result);
  