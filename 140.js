const numDistinct = function(s, t) {
    const tlen = t.length;
    const slen = s.length;
    const mem = Array.from({ length: tlen + 1 }, () =>
        new Array(slen + 1).fill(0)
    );

    // Initialize the first row of the memoization table
    for (let j = 0; j <= slen; j++) {
        mem[0][j] = 1;
    }

    // Fill in the memoization table using dynamic programming
    for (let i = 0; i < tlen; i++) {
        for (let j = 0; j < slen; j++) {
            if (t.charAt(i) === s.charAt(j)) {
                mem[i + 1][j + 1] = mem[i][j] + mem[i + 1][j];
            } else {
                mem[i + 1][j + 1] = mem[i + 1][j];
            }
        }
    }

    // The final result is stored in the bottom-right cell of the memoization table
    return mem[tlen][slen];
};

// Example usage:
const s = "rabbbit";
const t = "rabbit";
const distinctSubsequences = numDistinct(s, t);
console.log(distinctSubsequences); // It will print the number of distinct subsequences.
