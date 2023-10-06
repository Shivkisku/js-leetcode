const searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = (matrix[0] || []).length
    const r = chkRow(matrix, rows, cols, target)
    if(r === -1) return false
    for(let i = 0; i < cols; i++) {
      if(matrix[r][i] === target) return true
    }
    return false
};

function chkRow(matrix, rows, cols, target) {
  if(cols <= 0) return -1
  for(let i = 0; i < rows; i++) {
    if(target <= matrix[i][cols - 1]) return i
  }
  return -1
}

const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
  ]; // Replace with your desired matrix
  
  const target = 5; // Replace with your desired target value
  
  const result = searchMatrix(matrix, target);
  console.log(result); // Print the result
  