// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const recoverTree = function(root) {
    let node1, node2;
    let prev = new TreeNode(-Infinity);
    traverse(root);
    swap(node1, node2);

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        if (node.val < prev.val) {
            node2 = node;
            if (!node1) node1 = prev;
        }
        prev = node;
        traverse(node.right);
    }

    function swap(node1, node2) {
        let temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;
    }
};

// Helper function to convert a binary tree to an array (in-order traversal)
function treeToArray(root) {
    const result = [];
    function inorderTraversal(node) {
        if (node) {
            inorderTraversal(node.left);
            result.push(node.val);
            inorderTraversal(node.right);
        }
    }
    inorderTraversal(root);
    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

recoverTree(root);
const resultArray = treeToArray(root);
console.log(resultArray);
