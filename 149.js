// Define the TreeNode class (assuming you have it defined)
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
  
  const maxPathSum = function(root) {
    let obj = {
      max: Number.MIN_SAFE_INTEGER
    };
    traverse(root, obj);
    
    return obj.max;
  };
  
  function traverse(node, obj) {
    if (node === null) return 0;
    let left = Math.max(0, traverse(node.left, obj));
    let right = Math.max(0, traverse(node.right, obj));
    obj.max = Math.max(obj.max, node.val + left + right);
    return node.val + Math.max(left, right);
  }
  
  // Example tree creation
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(20);
  root.left.right = new TreeNode(1);
  root.right.right = new TreeNode(-25);
  root.right.right.left = new TreeNode(3);
  root.right.right.right = new TreeNode(4);
  
  // Calculate and print the maximum path sum
  const maxPathSumValue = maxPathSum(root);
  console.log(maxPathSumValue);
  