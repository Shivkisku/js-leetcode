// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const flatten = function(root) {
    let prev = null;
    function flattenAndReorder(root) {
        if (root == null) {
            return;
        }
        flattenAndReorder(root.right);
        flattenAndReorder(root.left);
        root.right = prev;
        root.left = null;
        prev = root;
    }
    flattenAndReorder(root);
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);

flatten(root);

// Printing the flattened list
let current = root;
while (current != null) {
    console.log(current.val);
    current = current.right;
}
