const nums = [1, 2, 3]; // Replace this array with your input

const nextPermutation = function(nums) {
  const n = nums.length;
  let k = null;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      k = i;
      break;
    }
  }
  if (k === null) {
    reverse(nums, 0, n - 1);
  } else {
    let end;
    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] > nums[k]) {
        end = i;
        break;
      }
    }
    swap(nums, k, end);
    reverse(nums, k + 1, n - 1);
  }
};

function reverse(arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

nextPermutation(nums);
console.log(nums); // Print the output array after finding the next permutation
