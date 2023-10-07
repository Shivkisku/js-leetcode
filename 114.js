const grayCode = function(n) {
    if (n === 0) {
        return [0];
    }

    const temp = grayCode(n - 1);
    const nums = [...temp];
    const addNum = 1 << (n - 1);

    for (let i = temp.length - 1; i >= 0; i--) {
        nums.push(addNum + temp[i]);
    }

    return nums;
};

// Example usage:
const n = 3;
const result = grayCode(n);
console.log(result);
