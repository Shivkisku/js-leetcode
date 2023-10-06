// Define the reverse function
const reverse = function(num) {
    let negative = false;
    let result = 0;
    if (num < 0) {
      negative = true;
      num = Math.abs(num);
    }
    while (num > 0) {
      const mod = num % 10;
      num = Math.floor(num / 10);
      result = result * 10 + mod;
    }
    if (result > 2147483647) return 0;
    if (negative) return result * -1;
    return result;
  };
  
  // Test the function with a sample input
  const input = 123;
  const result = reverse(input);
  console.log(result); // This should print 321, which is the reversed integer.
  