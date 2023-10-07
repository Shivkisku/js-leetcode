const numDecodings = function(s) {
    if (s == null || s.length === 0) return 0; // Return 0 for empty input.
    if (s[0] === '0') return 0; // If the first character is '0', there's no valid decoding.

    const set = new Set();
    const n = s.length;

    for (let i = 1; i <= 26; i++) {
        set.add(`${i}`);
    }

    const dp = Array(n + 1).fill(0);
    dp[0] = 1; // An empty string can be decoded in one way.
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        if (set.has(s[i - 2] + s[i - 1])) dp[i] += dp[i - 2];
        if (set.has(s[i - 1])) dp[i] += dp[i - 1];
    }

    return dp[n];
};

// Example usage:
const s = "226";
const result = numDecodings(s);
console.log(result);
