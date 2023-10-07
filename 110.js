const maximalRectangle = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const left = Array(n).fill(0);
    const right = Array(n).fill(n - 1);
    const height = Array(n).fill(0);
    
    let res = 0;
    
    for(let i = 0; i < m; i++) {
      let l = 0, r = n - 1;
      for(let j = 0; j < n; j++) {
        if(matrix[i][j] === '1') left[j] = Math.max(left[j], l);
        else {
          left[j] = 0;
          l = j + 1;
        }
      }
      
      for(let j = n - 1; j >= 0; j--) {
        if(matrix[i][j] === '1') right[j] = Math.min(right[j], r);
        else {
          right[j] = n - 1;
          r = j - 1;
        }
      }
  
      for(let j = 0; j < n; j++) {
        height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
        res = Math.max(res, (right[j] - left[j] + 1) * height[j]);
      }
    }
    
    return res;
  };
  
  // Example usage:
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ];
  const result = maximalRectangle(matrix);
  console.log(result);
  