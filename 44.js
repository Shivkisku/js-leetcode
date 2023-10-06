class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const swapPairs = function(node) {
    const head = new ListNode(-1);
    let cur = head;
  
    while (node !== null) {
      if (node.next !== null) {
        let one = node;
        let two = node.next;
        let three = node.next.next;
        cur.next = two;
        two.next = one;
        one.next = three;
        cur = cur.next.next;
        node = three;
      } else {
        cur.next = node;
        break;
      }
    }
  
    return head.next;
  };
  
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    let head = null;
    let current = null;
  
    for (const val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to print a linked list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  // Example input
  const input = createLinkedList([1, 2, 3, 4]);
  
  // Swap pairs in the linked list
  const result = swapPairs(input);
  
  // Print the swapped linked list
  printLinkedList(result);
  