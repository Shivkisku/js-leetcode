// Define the romanToInt function
const romanToInt = function(s) {
    let res = 0
    for (let i = s.length - 1; i >= 0; i--) {
      let c = s.charAt(i)
      switch (c) {
        case 'I':
          res += res >= 5 ? -1 : 1
          break
        case 'V':
          res += 5
          break
        case 'X':
          res += 10 * (res >= 50 ? -1 : 1)
          break
        case 'L':
          res += 50
          break
        case 'C':
          res += 100 * (res >= 500 ? -1 : 1)
          break
        case 'D':
          res += 500
          break
        case 'M':
          res += 1000
          break
      }
    }
    return res
  }
  
  // Test the function with a sample input
  const input = "LVIII";
  const result = romanToInt(input);
  console.log(result); // This should print 58, which is the integer representation of "LVIII".
  