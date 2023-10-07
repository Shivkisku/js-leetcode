// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedArrayToBST = function(nums) {
    if (nums.length == 0) {
        return null;
    }
    const head = helper(nums, 0, nums.length - 1);
    return head;
};

function helper(nums, low, high) {
    if (low > high) {
        // Done
        return null;
    }
    let mid = Math.floor((low + high) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
}

// Helper function to perform inorder traversal and print the result
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
const sortedArray = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(sortedArray);
const resultArray = inorderTraversal(root);
console.log(resultArray);
