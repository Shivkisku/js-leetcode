const nextPermutation = function(nums) {
    const n = nums.length;
    let start, end;
  
    for (let i = n - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        start = i;
        break;
      }
    }
  
    if (start === undefined) {
      reverse(nums, 0, n - 1);
    } else {
      for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > nums[start]) {
          end = i;
          break;
        }
      }
  
      swap(nums, start, end);
      reverse(nums, start + 1, n - 1);
    }
  };
  
  function reverse(arr, start, end) {
    while (start < end) {
      swap(arr, start++, end--);
    }
  }
  
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); // Print the output array after finding the next permutation
  