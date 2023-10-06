const s = "(()()()()())()()))(()()())"; // Replace this string with your input

const longestValidParentheses = function (s) {
  let res = 0,
    stk = [],
    n = s.length,
    idxStk = [];

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (stk.length && stk[stk.length - 1] === '(' && ch === ')') {
      stk.pop();
      idxStk.pop();
    } else {
      stk.push(ch);
      idxStk.push(i);
    }
    res = Math.max(res, i - (idxStk.length ? idxStk[idxStk.length - 1] : -1));
  }

  return res;
};

const result = longestValidParentheses(s);
console.log(result); // Print the length of the longest valid parentheses substring
