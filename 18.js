// Define the myAtoi function
const myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
  };
  
  // Test the function with a sample input
  const input = "420";
  const result = myAtoi(input);
  console.log(result); // This should print 42, which is the integer representation of the input string.
  