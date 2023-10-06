const mySqrt = function(x) {
    let left = 0, right = x;
    while (left < right) {
      let mid = right - ((right - left) >> 1);
      if (mid * mid > x) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return left;
  };
  
  const x = 16; // Replace with your desired value of x
  
  const result = mySqrt(x);
  console.log(result); // Print the result
  