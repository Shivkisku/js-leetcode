const findMin = function(nums) {
    for(let i = 1, len = nums.length; i < len; i++) {
      if(nums[i] < nums[i - 1]) {
        return nums[i]
      }
    }
    return nums[0]
  };
  
  const nums = [4, 5, 6, 7, 3, 2, 2];
  const result = findMin(nums);
  console.log(result); // Output should be 0
  