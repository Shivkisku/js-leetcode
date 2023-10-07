// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const isBalanced = function(root) {
    return check(root) >= 0 ? true : false;
};

const check = (root) => {
    if (!root) return 1;

    const left = check(root.left);
    if (left === -1) return -1;

    const right = check(root.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const isBalancedResult = isBalanced(root);
console.log(isBalancedResult); // It will print true because the tree is balanced.
