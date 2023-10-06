const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Replace this array with your input
const target = 5; // Replace this with your target value

const search = function(nums, target) {
  const len = nums.length;
  
  // Search from the beginning of the array.
  for (let i = 0; i < len && nums[i] <= target; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  // Search from the end of the array.
  for (let j = len - 1; j >= 0 && nums[j] >= target; j--) {
    if (nums[j] === target) {
      return j;
    }
  }

  return -1;
};

const result = search(nums, target);
console.log(result); // Print the index of the target value or -1 if not found
