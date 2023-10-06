// Define the romanToInt function
const romanToInt = function(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let result = 0
    let index = s.length - 1
    let preInt = 0
    while (index >= 0) {
      let ch = s[index]
      let curInt = map[ch]
      if (curInt >= preInt) result += curInt
      else result -= curInt
      preInt = curInt
      index--
    }
    return result
  }
  
  // Test the function with a sample input
  const input = "LVIII";
  const result = romanToInt(input);
  console.log(result); // This should print 58, which is the integer representation of "LVIII".
  