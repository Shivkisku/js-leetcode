// Define the fourSum function
const fourSum = function (nums, target) {
    return nSum(nums.sort((a, b) => a - b), target, 4, 0);
  };
  
  function nSum(nums, target, k, start) {
    const res = [];
    if (nums.length < k || k < 2 || target < nums[0] * k || target > nums[nums.length - 1] * k)
      return res;
    if (k === 2) {
      // Two-sum; improved to O(n)
      let r = nums.length - 1;
      let l = start;
      while (l < r) {
        if (nums[l] + nums[r] === target) {
          res.push([nums[l], nums[r]]);
          // Skip duplication
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (nums[l] + nums[r] < target) {
          l++;
        } else {
          r--;
        }
      }
    } else {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i === start || (i > start && nums[i] !== nums[i - 1])) {
          let temp = nSum(nums, target - nums[i], k - 1, i + 1);
          temp.forEach(t => {
            t.push(nums[i]);
            res.push(t);
          });
        }
      }
    }
    return res;
  }
  
  // Test the function with a sample input
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result); // This should print an array of unique quadruplets.
  