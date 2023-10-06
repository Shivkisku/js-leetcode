// Define the threeSum function
const threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    let lo, hi, sum
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) break
      if (nums[i] === nums[i - 1]) continue
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        lo = i + 1
        hi = nums.length - 1
        sum = 0 - nums[i]
        while (lo < hi) {
          if (nums[lo] + nums[hi] === sum) {
            res.push([nums[i], nums[lo], nums[hi]])
            while (lo < hi && nums[lo] === nums[lo + 1]) lo += 1
            while (lo < hi && nums[hi] === nums[hi - 1]) hi -= 1
            lo += 1
            hi -= 1
          } else if (nums[lo] + nums[hi] < sum) lo++
          else hi--
        }
      }
    }
    return res
  }
  
  // Test the function with a sample input
  const input = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(input);
  console.log(result); // This should print an array of unique triplets that sum up to zero.
  