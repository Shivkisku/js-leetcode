const upsideDownBinaryTree = function(root) {
    let node = root, parent = null, right = null;
    while (node !== null) {
      const left = node.left;
      node.left = right;
      right = node.right;
      node.right = parent;
      parent = node;
      node = left;
    }
    return parent;
  };
  
  // Definition for a binary tree node.
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Helper function to print the tree structure (in-order traversal)
  function printTree(root) {
    if (root) {
      printTree(root.left);
      console.log(root.val);
      printTree(root.right);
    }
  }
  
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Flip the binary tree upside down
  const newRoot = upsideDownBinaryTree(root);
  
  // Print the flipped tree
  printTree(newRoot);
  