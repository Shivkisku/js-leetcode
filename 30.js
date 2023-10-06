// Define the threeSumClosest function
const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result;
    let lo;
    let hi;
    let sum;
    result = nums[0] + nums[1] + nums[nums.length - 1];
    for (let i = 0; i < nums.length - 2; i++) {
      lo = i + 1;
      hi = nums.length - 1;
      while (lo < hi) {
        sum = nums[i] + nums[lo] + nums[hi];
        if (sum < target) {
          while (lo < hi && nums[lo] === nums[lo + 1]) {
            lo += 1;
          }
          lo += 1;
        } else if (sum > target) {
          while (lo < hi && nums[hi] === nums[hi - 1]) {
            hi -= 1;
          }
          hi -= 1;
        } else {
          return sum;
        }
  
        if (Math.abs(target - sum) < Math.abs(target - result)) {
          result = sum;
        }
      }
    }
  
    return result;
  }
  
  // Test the function with a sample input
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // This should print the sum closest to the target.
  