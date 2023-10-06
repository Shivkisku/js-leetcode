const generateParenthesis = function(n) {
    const res = [];
    backtrack(res, "", 0, 0, n);
    return res;
  };
  
  function backtrack(arr, cur, open, close, max) {
    if (cur.length === max * 2) {
      arr.push(cur);
      return;
    }
    if (open < max) backtrack(arr, cur + "(", open + 1, close, max);
    if (close < open) backtrack(arr, cur + ")", open, close + 1, max);
  }
  
  // Example input
  const n = 3;
  
  // Generate and print the valid combinations of parentheses
  const result = generateParenthesis(n);
  console.log(result);
  