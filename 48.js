const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    let pre = nums[0];
    for (let i = 1; i < nums.length; ) {
      if (nums[i] !== pre) {
        pre = nums[i];
        i += 1;
      } else {
        nums.splice(i, 1);
      }
    }
    return nums.length;
  };
  
  // Example input
  const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
  
  // Remove duplicates and get the new length
  const newLength = removeDuplicates(nums);
  
  // Print the resulting array and its length
  console.log("Resulting Array:", nums);
  console.log("New Length:", newLength);
  