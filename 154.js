class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  const sumNumbers = function(root) {
    const sum = [];
    rec(root, '', sum);
    return sum.reduce((ac, el) => ac + el, 0);
  };
  
  function rec(node, str, arr) {
    if (node == null) {
      arr.push(+str);
      return;
    }
    if (node.left !== null) {
      rec(node.left, str + node.val, arr);
    }
    if (node.right !== null) {
      rec(node.right, str + node.val, arr);
    }
    if (node.left === null && node.right === null) {
      arr.push(+(str + node.val));
    }
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  
  const result = sumNumbers(root);
  console.log(result);
  