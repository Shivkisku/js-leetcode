const generateMatrix = function(n) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res[i] = [];
    }
    let i = 0,
      j = 0,
      cur = 1;
    while (n > 0) {
      res[i][j] = cur++;
      n--;
      let step = n;
      while (step > 0) {
        res[i][++j] = cur++;
        step--;
      }
      step = n;
      while (step > 0) {
        res[++i][j] = cur++;
        step--;
      }
      step = n--;
      while (step > 0) {
        res[i][--j] = cur++;
        step--;
      }
      step = n;
      while (step > 0) {
        res[--i][j] = cur++;
        step--;
      }
      j++;
    }
    return res;
  };
  
  const n = 3; // Replace with the desired value of n
  const result = generateMatrix(n);
  console.log(result); // Print the generated spiral matrix
  