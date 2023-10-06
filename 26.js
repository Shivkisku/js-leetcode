const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
  
    const sortedStrs = strs.concat().sort();
    const a1 = sortedStrs[0];
    const a2 = sortedStrs[sortedStrs.length - 1];
    const L = a1.length;
    let i = 0;
  
    while (i < L && a1.charAt(i) === a2.charAt(i)) {
      i++;
    }
  
    return a1.substring(0, i);
  };
  
  // Test the function with a sample input
  const input = ["flower", "flow", "flight"];
  const result = longestCommonPrefix(input);
  console.log(result); // This should print "fl", which is the longest common prefix among the input strings.
  