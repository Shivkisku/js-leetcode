// Define the reverse function
const reverse = (n) => {
    if (typeof n !== 'number') {
        throw new Error('n must be a number');
    }
    let sign = Math.sign(n);
    n = Math.abs(n);
    if (n < 0) {
        return -reverse(-n);
    }
    let reversed = Number([...n.toString()].reverse().join(''));
    return sign * reversed;
};

// Test the function with a sample input
const input = 12345;
const result = reverse(input);
console.log(result); // This should print 321, which is the reversed integer.
