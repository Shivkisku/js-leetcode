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
  
  // Function to perform a postorder traversal
  const postorderTraversal = function(root) {
    const res = [];
    traverse(root, res);
    return res;
  };
  
  // Helper function for the traversal
  function traverse(node, arr) {
    if (node === null) return;
    traverse(node.left, arr);
    traverse(node.right, arr);
    arr.push(node.val);
  }
  
  // Function to print the result
  function printPostorderTraversal(root) {
    const result = postorderTraversal(root);
    console.log(result);
  }
  
  // Test the code
  console.log("Postorder Traversal:");
  printPostorderTraversal(root);
  