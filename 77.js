const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Replace with your array of integers

const maxSubArray = function(nums) {
  let res = -1e9, sum = 0;
  for (const e of nums) {
    sum += e;
    res = Math.max(res, sum);
    if (sum < 0) sum = 0;
  }
  return res;
};

const result = maxSubArray(nums);
console.log(result); // Print the maximum subarray sum
