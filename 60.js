const nums = [1, 3, 5, 6]; // Replace this array with your sorted input
const target = 2; // Replace this with your target value

const searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    } else {
      if (i === nums.length - 1) {
        return i + 1;
      }
    }
  }
};

const result = searchInsert(nums, target);
console.log(result); // Print the index where the target value should be inserted
