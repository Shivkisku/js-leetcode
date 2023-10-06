const nums = [2, 3, 1, 1, 4]; // Replace with your input array

const jump = function(nums) {
  if (nums.length <= 1) return 0;
  let curMax = 0; // to mark the last element in a level
  let level = 0, i = 0;
  while (i <= curMax) { 
    let furthest = curMax; // to mark the last element in the next level
    for (; i <= curMax; i++) {
      furthest = Math.max(furthest, nums[i] + i);
      if (furthest >= nums.length - 1) return level + 1;
    }
    level++;
    curMax = furthest;
  }
  return -1; // if i < curMax, i can't move forward anymore (the last element in the array can't be reached)
};

const result = jump(nums);
console.log(result); // Print the minimum number of jumps required
