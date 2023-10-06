const s = "adceb"; // Replace with your input string
const p = "*a*b"; // Replace with your pattern string

const isMatch = function(s, p) {
  const M = s.length;
  const N = p.length;
  let i = 0,
    j = 0,
    lastMatchInS,
    lastStarPos;
  while (i < M) {
    if (j < N && (p[j] === s[i] || p[j] === '?')) {
      i++;
      j++;
    } else if (j < N && p[j] === '*') {
      lastStarPos = j;
      j++;
      lastMatchInS = i;
    } else if (lastStarPos !== undefined) {
      // back to the previous '*'
      j = lastStarPos + 1;
      lastMatchInS++;
      i = lastMatchInS;
    } else {
      return false;
    }
  }
  while (j < N && p[j] === '*') {
    j++;
  }
  return j === N;
};

const result = isMatch(s, p);
console.log(result); // Print whether the string matches the pattern
