// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const pathSum = function(root, sum) {
    const result = [];
    backtrack(root, sum, [], result);
    return result;
};

const backtrack = function(root, sum, temp, result) {
    if (root == null) {
        return;
    }
    temp.push(root.val);
    let newSum = sum - root.val;
    if (root.left == null && root.right == null) {
        if (newSum === 0) {
            result.push([...temp]);
        }
        temp.pop();
        return;
    }
    backtrack(root.left, newSum, temp, result);
    backtrack(root.right, newSum, temp, result);
    temp.pop();
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

const sum = 22;
const pathSumResult = pathSum(root, sum);
console.log(pathSumResult); // It will print an array of arrays containing the paths with a sum of 22.
