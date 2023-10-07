// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next || null;
}

const connect = function(root) {
    if (root == null) return null;
    const cur = [root];
    while (cur.length) {
        const len = cur.length;
        for (let i = 0; i < len; i++) {
            const el = cur.shift();
            if (i === len - 1) el.next = null;
            else el.next = cur[0];

            if (el.left) cur.push(el.left);
            if (el.right) cur.push(el.right);
        }
    }
    return root;
};

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

connect(root);

// Printing the output
let currentLevel = root;
while (currentLevel) {
    let current = currentLevel;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
    currentLevel = currentLevel.left; // Move to the next level
}
