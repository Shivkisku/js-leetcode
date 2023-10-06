// Define the findMedianSortedArrays function
const findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
    }
    const x = nums1.length;
    const y = nums2.length;
  
    let low = 0;
    let high = x;
  
    while (low <= high) {
      const partX = Math.floor((low + high) / 2);
      const partY = Math.floor((x + y + 1) / 2) - partX;
  
      const maxX = partX === 0 ? Number.NEGATIVE_INFINITY : nums1[partX - 1];
      const maxY = partY === 0 ? Number.NEGATIVE_INFINITY : nums2[partY - 1];
  
      const minX =
        partX === nums1.length ? Number.POSITIVE_INFINITY : nums1[partX];
      const minY =
        partY === nums2.length ? Number.POSITIVE_INFINITY : nums2[partY];
  
      if (maxX <= minY && maxY <= minX) {
        const lowMax = Math.max(maxX, maxY);
  
        if ((x + y) % 2 == 1) {
          return Math.max(maxX, maxY);
        } else {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        }
      } else if (maxX < minY) {
        low = partX + 1;
      } else {
        high = partX - 1;
      }
    }
  };
  
  // Test the function with two sample sorted arrays
  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);
  console.log(result); // This should print 2.0, which is the median of the merged sorted arrays.
  