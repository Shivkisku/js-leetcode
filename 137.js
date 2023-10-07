// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const hasPathSum = function(root, sum) {
    if (root == null) {
        return false;
    }
    const obj = {
        sum: 0
    };
    const res = [];
    dfs(root, obj, sum, res);
    return res.indexOf(true) !== -1;
};

function dfs(node, obj, target, res) {
    if (node == null) {
        return;
    }
    obj.sum += node.val;
    if (node.left == null && node.right == null) {
        if (obj.sum === target) {
            res.push(true);
        }
    }
    if (node.left) {
        dfs(node.left, { sum: obj.sum }, target, res);
    }
    if (node.right) {
        dfs(node.right, { sum: obj.sum }, target, res);
    }
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
root.right.right.right = new TreeNode(1);

const sum = 22;
const hasPathSumResult = hasPathSum(root, sum);
console.log(hasPathSumResult); // It will print true because there is a path (5 -> 4 -> 11 -> 2) with a sum of 22.
