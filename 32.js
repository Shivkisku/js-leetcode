// Define the fourSum function
const fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    const results = []
    kSum(nums, target, 4, 0, [], results)
    return results
  }
  
  function kSum(nums, target, k, i, acc, results) {
    if (nums[i] * k > target || nums[nums.length - 1] * k < target) return
    if (k > 2) {
      for (let j = i; j <= nums.length - k; j++) {
        if (j == i || nums[j] > nums[j - 1])
          kSum(nums, target - nums[j], k - 1, j + 1, [...acc, nums[j]], results)
      }
    } else {
      twoSum(nums, target, i, acc, results)
    }
  }
  
  function twoSum(nums, target, i, acc, results) {
    let lo = i
    let hi = nums.length - 1
    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      if (sum == target) {
        results.push([...acc, nums[lo], nums[hi]])
        while (nums[lo] == nums[lo + 1]) lo++
        while (nums[hi] == nums[hi - 1]) hi--
        lo++
        hi--
      } else if (sum < target) {
        lo++
      } else {
        hi--
      }
    }
  }
  
  // Test the function with a sample input
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result); // This should print an array of unique quadruplets.
  