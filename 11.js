// Define the longestPalindrome function
const longestPalindrome = function(s) {
    let res = '';
    for (let i = 0, len = s.length; i < len; i++) {
      let s1 = chk(s, i, i);
      let s2 = chk(s, i, i + 1);
      if (s1.length > res.length) res = s1;
      if (s2.length > res.length) res = s2;
    }
    return res;
  };
  
  function chk(s, i, j) {
    for (; i >= 0 && j < s.length; i--, j++) {
      if (s[i] !== s[j]) break;
    }
    return s.slice(i + 1, j);
  }
  
  // Test the function with a sample input
  const input = "babad";
  const result = longestPalindrome(input);
  console.log(result); // This should print "bab" or "aba", which is the longest palindromic substring.
  