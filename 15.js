// Define the reverse function
const reverse = function (x) {
    let res = 0, tail, newResult;
    const low = -Math.pow(2, 31), high = Math.pow(2, 31);
    while (x !== 0) {
      tail = x % 10;
      newResult = res * 10 + tail;
      if (newResult < low || newResult >= high) return 0;
      res = newResult;
      x = ~~(x / 10);
    }
    return res;
  };
  
  // Test the function with a sample input
  const input = 123;
  const result = reverse(input);
  console.log(result); // This should print 321, which is the reversed integer.
  