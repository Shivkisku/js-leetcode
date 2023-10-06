const nums = [1, 2, 3]; // Replace with your input array

function permute(nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
}

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    list.push(tempList.slice(0));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue; // element already exists, skip
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
}

const result = permute(nums);
console.log(result); // Print all permutations of the input array
