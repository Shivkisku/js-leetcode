function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Function to perform a preorder traversal
  const preorderTraversal = function(root) {
    const res = [];
    traversal(root, res);
    return res;
  };
  
  // Helper function for the traversal
  function traversal(node, arr) {
    if (node === null) return;
    arr.push(node.val);
    if (node.left) {
      traversal(node.left, arr);
    }
    if (node.right) {
      traversal(node.right, arr);
    }
  }
  
  // Function to print the result
  function printPreorderTraversal(root) {
    const result = preorderTraversal(root);
    console.log(result);
  }
  
  // Test the code
  console.log("Preorder Traversal:");
  printPreorderTraversal(root);
  