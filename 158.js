// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
  
  const cloneGraph = function(node) {
    if (!node) return node;
    const map = {};
    return traverse(node);
  
    function traverse(node) {
      if (!node) return node;
      if (!map[node.val]) {
        const newNode = new Node(node.val);
        map[node.val] = newNode;
        newNode.neighbors = node.neighbors.map(traverse);
      }
      return map[node.val];
    }
  };
  
  // Example usage:
  // Create a sample graph
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];
  
  // Clone the graph
  const clonedNode = cloneGraph(node1);
  
  // Print the cloned graph (you may want to implement a custom function for this)
  console.log(clonedNode);
  