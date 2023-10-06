const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
    digits.unshift(1);
    return digits;
  };
  
  const digits = [9, 9, 9]; // Replace with your desired array of digits
  
  const result = plusOne(digits);
  console.log(result); // Print the result
  