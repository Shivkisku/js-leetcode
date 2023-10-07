// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const inorderTraversal = function(root) {
    const res = [];
    if (root == null) return res;
    traversal(root, res);
    return res;
};

function traversal(node, res) {
    if (node.left) {
        traversal(node.left, res);
    }
    res.push(node.val);
    if (node.right) {
        traversal(node.right, res);
    }
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// Perform inorder traversal
const result = inorderTraversal(root);
console.log(result);
