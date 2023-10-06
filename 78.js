const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]; // Replace with your matrix
  
  const spiralOrder = function(matrix) {
    const res = [];
    let dir = 'top';
    while (matrix.length) {
      switch (dir) {
        case 'top':
          res.push(...matrix.shift());
          dir = 'right';
          break;
        case 'right':
          for (let i = 0; i < matrix.length - 1;) {
            res.push(matrix[i].pop());
            if (matrix[i].length === 0) {
              matrix.splice(i, 1);
            } else {
              i++;
            }
          }
          dir = 'bottom';
          break;
        case 'bottom':
          res.push(...matrix.pop().reverse());
          dir = 'left';
          break;
        case 'left':
          for (let i = matrix.length - 1; i >= 0; i--) {
            res.push(matrix[i].shift());
            if (matrix[i].length === 0) {
              matrix.splice(i, 1);
            }
          }
          dir = 'top';
          break;
      }
    }
    return res;
  };
  
  const result = spiralOrder(matrix);
  console.log(result); // Print the elements in spiral order
  