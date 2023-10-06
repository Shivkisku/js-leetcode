const nums = [5, 7, 7, 8, 8, 8, 10]; // Replace this array with your input (sorted)
const target = 8; // Replace this with your target value

const searchRange = function(nums, target) {
  let len = nums.length;
  let start = 0;
  let end = len - 1;
  let res = [];
  let idx;

  // Binary search to find the target value.
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      idx = mid;
      break;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (idx == null) {
    return [-1, -1];
  }

  let li = idx;
  let hi = idx;

  // Expand the range to find the lower and upper bounds.
  while (nums[li - 1] === target) {
    li--;
  }
  while (nums[hi + 1] === target) {
    hi++;
  }

  res = [li, hi];
  return res;
};

const result = searchRange(nums, target);
console.log(result); // Print the range of indices where the target value appears
