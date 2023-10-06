const sortColors = function(nums) {
    let j = 0;
    let k = nums.length - 1;
    const swap = (a, b) => {
      const t = nums[a];
      nums[a] = nums[b];
      nums[b] = t;
    };
    for (let i = 0; i <= k; i++) {
      if (nums[i] === 2) {
        swap(i--, k--);
      } else if (nums[i] === 0) {
        swap(i, j++);
      }
    }
  };

const nums = [2, 0, 2, 1, 1, 0]; // Replace with your desired array of colors

sortColors(nums);
console.log(nums); // Print the sorted array
