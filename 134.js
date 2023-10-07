// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedListToBST = function(head) {
    if (head == null) return null;
    const arr = [];
    let cur = head;
    while (cur !== null) {
        arr.push(cur);
        cur = cur.next;
    }
    return build(arr, null, '');
};

function build(arr, parent, type) {
    if (arr.length === 0) return null;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);
    const node = new TreeNode(arr[mid].val);
    if (parent) parent[type] = node;
    node.left = build(left, node, 'left');
    node.right = build(right, node, 'right');
    return node;
}

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
const head = new ListNode(-10);
head.next = new ListNode(-3);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(9);

const root = sortedListToBST(head);
const resultArray = inorderTraversal(root);
console.log(resultArray);
