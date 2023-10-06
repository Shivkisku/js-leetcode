const getPermutation = function(n, k) {
    const factorial = Array(n + 1).fill(0);
    factorial[0] = 1;
    for (let i = 1; i <= n; i++) {
      factorial[i] = factorial[i - 1] * i;
    }
    let res = '';
    const visited = Array(n + 1).fill(0);
    dfs(0);
    return res;
  
    function dfs(idx) {
      if (idx === n) return;
  
      const cnt = factorial[n - idx - 1];
      for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;
        if (cnt < k) {
          k -= cnt;
          continue;
        }
        res += i;
        visited[i] = 1;
        dfs(idx + 1);
        return;
      }
    }
  };
  
  const n = 4; // Replace with your desired value of n
  const k = 9; // Replace with your desired value of k
  
  const result = getPermutation(n, k);
  console.log(result); // Print the result
  