// Define the twoSum function
const twoSum = function(nums, target) {
    const myObject = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (myObject.hasOwnProperty(complement)) {
        return [myObject[complement], i];
      }
      myObject[nums[i]] = i;
    }
  };
  
  // Define the input array and target value
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  // Call the twoSum function
  const result = twoSum(nums, target);
  
  // Print the output
  console.log(result); // This should print [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
  