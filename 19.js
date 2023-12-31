// Define the myAtoi function
const myAtoi = function(s) {
    let n = s.length, i = 0, j = 0, sign = 1;
    if(n === 0) {
        return 0;
    } 
    while(i < n && s[i] === ' ') {
        i++;
    }
    if(i < n && (s[i] === '-' || s[i] === '+')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    j = i
    while(i < n) {
        if(Number.isInteger(parseInt(s[i]))) i++;
        else break;
    }
    let result = parseInt(s.slice(j, i))
    if(isNaN(result)) return 0
    if(sign * result < -(2**31)) return -(2**31);
    else if(sign * result > (2**31-1)) return 2**31-1;
    else return sign * result;  
};

// Test the function with a sample input
const input = "42";
const result = myAtoi(input);
console.log(result); // This should print 42, which is the integer representation of the input string.
