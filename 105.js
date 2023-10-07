const removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length;) {
        if(i >= 2 && nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
};

const nums = [1, 1, 1, 2, 2, 3, 3, 3, 4];
removeDuplicates(nums);

console.log(nums);
