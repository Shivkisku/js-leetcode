const twoSum = function(numbers, target) {
    const res = [];
    let remaining;
    let next = 0;
    for (let i = 0; i < numbers.length; i++) {
      remaining = target - numbers[i];
      next = i + 1;
      while (next < numbers.length && numbers[next] <= remaining) {
        if (numbers[next] === remaining) {
          res.push(i + 1, next + 1);
          break;
        }
        next += 1;
      }
    }
  
    return res;
  };
  
  const numbers = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(numbers, target);
  console.log(result); // Output should be [1, 2] (1-based indices)
  