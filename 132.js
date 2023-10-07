// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const levelOrderBottom = function(root) {
    const levels = [];
    postOrderTraversal(root);
    return levels.reverse();
  
    function postOrderTraversal(node, level = 0) {
        if (node) {
            if (!levels[level]) levels.push([]);
            postOrderTraversal(node.left, level + 1);
            postOrderTraversal(node.right, level + 1);
            levels[level].push(node.val);
        }
    }
};

// Helper function to print the result
function printResult(result) {
    for (const level of result) {
        console.log(level);
    }
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const result = levelOrderBottom(root);
printResult(result);
