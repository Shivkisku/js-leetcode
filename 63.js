const candidates = [2, 3, 6, 7]; // Replace this array with your candidates
const target = 7; // Replace this with your target sum

const combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  bt(candidates, target, res, [], 0);
  return res;
};

function bt(candidates, target, res, combination, start) {
  if (target === 0) {
    res.push(combination.slice(0));
    return;
  }
  for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
    combination.push(candidates[i]);
    bt(candidates, target - candidates[i], res, combination, i);
    combination.pop();
  }
}

const result = combinationSum(candidates, target);
console.log(result); // Print the combinations that sum up to the target
