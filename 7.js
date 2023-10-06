// Define the lengthOfLongestSubstring function
const lengthOfLongestSubstring = function(s) {
    let sub = [];
    let max = 0;
  
    for (let i = 0; i < s.length; i++) {
      let index = sub.indexOf(s.charAt(i));
      if (index == -1) {
        sub.push(s.charAt(i));
      } else {
        sub = sub.slice(index + 1);
        sub.push(s.charAt(i));
      }
      max = Math.max(max, sub.length);
    }
    return max;
  };
  
  // Test the function with a sample input
  const input = "abcabcbb";
  const result = lengthOfLongestSubstring(input);
  console.log(result); // This should print 3, which is the length of the longest substring without repeating characters (e.g., "abc").
  