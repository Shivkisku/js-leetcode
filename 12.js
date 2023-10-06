// Define the longestPalindrome function
const longestPalindrome = function(s) {
    let T = preProcess(s);
    let n = T.length;
    let P = [];
    let C = 0,
      R = 0;
    let i_mirror;
    for (let i = 1; i < n - 1; i++) {
      i_mirror = 2 * C - i; // equals to i' = C - (i-C)
  
      P[i] = R > i ? Math.min(R - i, P[i_mirror]) : 0;
  
      // Attempt to expand palindrome centered at i
      while (T[i + 1 + P[i]] == T[i - 1 - P[i]]) P[i]++;
  
      // If palindrome centered at i expands past R,
      // adjust center based on expanded palindrome.
      if (i + P[i] > R) {
        C = i;
        R = i + P[i];
      }
    }
  
    // Find the maximum element in P.
    let maxLen = 0;
    let centerIndex = 0;
    for (let j = 1; j < n - 1; j++) {
      if (P[j] > maxLen) {
        maxLen = P[j];
        centerIndex = j;
      }
    }
  
    // Extract the longest palindromic substring from T.
    const start = (centerIndex - 1 - maxLen) / 2;
    return s.substr(start, maxLen);
  };
  
  function preProcess(s) {
    let n = s.length;
    if (n === 0) return "^$";
    let ret = "^";
    for (let i = 0; i < n; i++) ret += "#" + s.substr(i, 1);
  
    ret += "#$";
    return ret;
  }
  
  // Test the function with a sample input
  const input = "babad";
  const result = longestPalindrome(input);
  console.log(result); // This should print "bab" or "aba", which is the longest palindromic substring.
  