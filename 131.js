// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTree = function(inorder, postorder) {
    const inmap = {};
    const posts = postorder;
    for (let i = 0; i < inorder.length; i++) {
        inmap[inorder[i]] = i;
    }
    return helper(postorder.length - 1, 0, inorder.length - 1);

    function helper(postEnd, inStart, inEnd) {
        if (postEnd < 0 || inEnd < inStart) return null;
        const val = posts[postEnd];
        const idx = inmap["" + val];
        const root = new TreeNode(val);
        root.left = helper(postEnd - (inEnd - idx) - 1, inStart, idx - 1);
        root.right = helper(postEnd - 1, idx + 1, inEnd);

        return root;
    }
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
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const root = buildTree(inorder, postorder);
const resultArray = inorderTraversal(root);
console.log(resultArray);
