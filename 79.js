const nums = [2, 3, 1, 1, 4]; // Replace with your array of integers

const canJump = function(nums) {
  let max = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i <= max && nums[i] > 0) {
      max = Math.max(max, i + nums[i]);
    }
  }
  return max >= nums.length - 1;
};

const result = canJump(nums);
console.log(result); // Print true if it's possible to reach the last index, otherwise false
