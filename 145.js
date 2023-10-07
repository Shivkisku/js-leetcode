const minimumTotal = function(triangle) {
    const n = triangle.length;
  
    // Start from the second-to-last row and work our way up
    for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        const self = triangle[i][j];
        const res = Math.min(
          triangle[i + 1][j] + self,
          triangle[i + 1][j + 1] + self
        );
        triangle[i][j] = res;
      }
    }
  
    // The minimum path sum is now stored in the top element of the triangle
    return triangle[0][0];
  };
  
  // Example input triangle
  const triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ];
  
  // Calculate and print the minimum path sum
  const minSum = minimumTotal(triangle);
  console.log(minSum);
  