const findMissingRanges = function(nums, lower, upper) {
    const list = [];
    for (let n of nums) {
      let justBelow = n - 1;
      if (lower === justBelow) list.push(lower + '');
      else if (lower < justBelow) list.push(lower + '->' + justBelow);
      lower = n + 1;
    }
    if (lower === upper) list.push(lower + '');
    else if (lower < upper) list.push(lower + '->' + upper);
    return list;
  };
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  console.log(result);
  