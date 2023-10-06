// Define the maxArea function
const maxArea = function(height) {
    let res = 0, l = 0, r = height.length - 1
    while(l < r) {
      const tmp = (r - l) * Math.min(height[l], height[r])
      if(tmp > res) res = tmp
      if(height[l] < height[r]) l++
      else r--
    }
    return res
  };
  
  // Test the function with a sample input
  const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  const result = maxArea(heights);
  console.log(result); // This should print 49, which is the maximum area.
  