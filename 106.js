const search = function(nums, target) {
    const len = nums.length;
    if (len === 0) return false;

    let left = 0;
    let right = len - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

const nums = [2, 5, 6, 0, 0, 1, 2];
const target = 0;
const result = search(nums, target);
console.log(result);
