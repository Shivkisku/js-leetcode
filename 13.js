// Define the longestPalindrome function
const longestPalindrome = function(s) {
    const n = s.length;
    let res = '';
    for (let i = 0; i < n; i++) {
      const first = chk(s, i, i, n);
      if (first.length > res.length) res = first;
      const second = chk(s, i, i + 1, n);
      if (second.length > res.length) res = second;
    }
    return res;
  };
  
  function chk(str, i, j, n) {
    if (j >= n) return str[i];
    let l = i, r = j;
    while (l >= 0 && r < n) {
      if (str[l] === str[r]) {
        l--;
        r++;
      } else {
        return str.slice(l + 1, r);
      }
    }
    if (l < 0) {
      return str.slice(0, r);
    } else {
      return str.slice(l + 1, n);
    }
  }
  
  // Test the function with a sample input
  const input = "babad";
  const result = longestPalindrome(input);
  console.log(result); // This should print "bab" or "aba", which is the longest palindromic substring.
  