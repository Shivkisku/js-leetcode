// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const generateTrees = function(n) {
    if (n === 0) return [];
    return genTreeList(1, n);
};

function genTreeList(start, end) {
    const list = [];
    if (start > end) list.push(null);
    for (let idx = start; idx <= end; idx++) {
        const leftList = genTreeList(start, idx - 1);
        const rightList = genTreeList(idx + 1, end);
        for (let left of leftList) {
            for (let right of rightList) {
                const root = new TreeNode(idx);
                root.left = left;
                root.right = right;
                list.push(root);
            }
        }
    }
    return list;
}

// Helper function to convert a binary tree to an array
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
const n = 3;
const trees = generateTrees(n);
const treeArrays = trees.map(treeToArray);
console.log(treeArrays);
