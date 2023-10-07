// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = function(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;
    const val = preorder[0];
    const node = new TreeNode(val);
    const inIdx = inorder.indexOf(val);
    const leftIn = inorder.slice(0, inIdx);
    const rightIn = inorder.slice(inIdx + 1);

    const leftPre = preorder.slice(1, 1 + leftIn.length);
    const rightPre = preorder.slice(1 + leftIn.length);

    node.left = buildTree(leftPre, leftIn);
    node.right = buildTree(rightPre, rightIn);
    return node;
};

// Helper function to print the tree using inorder traversal
function inorderTraversal(root) {
    const result = [];
    function inorder(node) {
        if (node) {
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
    }
    inorder(root);
    return result;
}

// Example usage:
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const root = buildTree(preorder, inorder);
const resultArray = inorderTraversal(root);
console.log(resultArray);
