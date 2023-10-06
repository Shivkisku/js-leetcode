// Define the lengthOfLongestSubstring function
const lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    const hash = {};
    let max = 0;
    for (let i = 0, j = -1, len = s.length; i < len; i++) {
      const cur = s[i];
      if (hash[cur] != null) j = Math.max(j, hash[cur]);
  
      hash[cur] = i;
      max = Math.max(max, i - j);
    }
  
    return max;
  };
  
  // Test the function with a sample input
  const input = "abcabcbb";
  const result = lengthOfLongestSubstring(input);
  console.log(result); // This should print 3, which is the length of the longest substring without repeating characters (e.g., "abc").
  