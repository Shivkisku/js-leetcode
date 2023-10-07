const merge = function(nums1, m, nums2, n) {
    let fi = m - 1;
    let si = n - 1;
    let mergedIndex = m + n - 1;

    while (si >= 0) {
        if (fi >= 0 && nums1[fi] > nums2[si]) {
            nums1[mergedIndex] = nums1[fi];
            fi--;
        } else {
            nums1[mergedIndex] = nums2[si];
            si--;
        }
        mergedIndex--;
    }
};

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
