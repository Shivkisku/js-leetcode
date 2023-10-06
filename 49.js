const removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[j] = nums[i];
        j++;
      }
    }
    return j;
  };
  
  // Example input
  const nums = [3, 2, 2, 3];
  const val = 3;
  
  // Remove all instances of 'val' from the array and get the new length
  const newLength = removeElement(nums, val);
  
  // Print the resulting array and its length
  console.log("Resulting Array:", nums.slice(0, newLength));
  console.log("New Length:", newLength);
  