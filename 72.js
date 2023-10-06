const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]; // Replace with your input matrix
  
  const rotate = function(matrix) {
    let s = 0,
      e = matrix.length - 1;
    while (s < e) {
      let temp = matrix[s];
      matrix[s] = matrix[e];
      matrix[e] = temp;
      s++;
      e--;
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i + 1; j < matrix[i].length; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  };
  
  rotate(matrix);
  console.log(matrix); // Print the rotated matrix
  