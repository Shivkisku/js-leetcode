// Define the findMedianSortedArrays function
const findMedianSortedArrays = function(A, B) {
    let m = A.length,
      n = B.length;
  
    if (m > n) {
      return findMedianSortedArrays(B, A);
    }
  
    let imin = 0,
      imax = m,
      i,
      j;
    while (imin <= imax) {
      i = (imin + imax) >> 1;
      j = ((m + n + 1) >> 1) - i;
      if (j > 0 && i < m && B[j - 1] > A[i]) {
        imin = i + 1;
      } else if (i > 0 && j < n && A[i - 1] > B[j]) {
        imax = i - 1;
      } else {
        let num1, num2;
        if (i === 0) {
          num1 = B[j - 1];
        } else if (j === 0) {
          num1 = A[i - 1];
        } else {
          num1 = Math.max(A[i - 1], B[j - 1]);
        }
  
        if ((m + n) & 1) {
          return num1;
        }
  
        if (i === m) {
          num2 = B[j];
        } else if (j === n) {
          num2 = A[i];
        } else {
          num2 = Math.min(A[i], B[j]);
        }
        return (num1 + num2) / 2.0;
      }
    }
  };
  
  // Test the function with two sample sorted arrays
  const A = [1, 3];
  const B = [2];
  const result = findMedianSortedArrays(A, B);
  console.log(result); // This should print 2.0, which is the median of the merged sorted arrays.
  