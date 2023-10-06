class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const reverseKGroup = function (head, k) {
    let ptr = head;
    let ktail = null;
  
    // Head of the final, modified linked list
    let new_head = null;
  
    // Keep going until there are nodes in the list
    while (ptr != null) {
      let count = 0;
  
      // Start counting nodes from the head
      ptr = head;
  
      // Find the head of the next k nodes
      while (count < k && ptr != null) {
        ptr = ptr.next;
        count += 1;
      }
  
      // If we counted k nodes, reverse them
      if (count == k) {
        // Reverse k nodes and get the new head
        let revHead = reverseLinkedList(head, k);
  
        // new_head is the head of the final linked list
        if (new_head == null) new_head = revHead;
  
        // ktail is the tail of the previous block of
        // reversed k nodes
        if (ktail != null) ktail.next = revHead;
  
        ktail = head;
        head = ptr;
      }
    }
  
    // attach the final, possibly un-reversed portion
    if (ktail != null) ktail.next = head;
  
    return new_head == null ? head : new_head;
  };
  
  function reverseLinkedList(head, k) {
    // Reverse k nodes of the given linked list.
    // This function assumes that the list contains
    // at least k nodes.
    let new_head = null;
    let ptr = head;
  
    while (k > 0) {
      // Keep track of the next node to process in the
      // original list
      let next_node = ptr.next;
  
      // Insert the node pointed to by "ptr"
      // at the beginning of the reversed list
      ptr.next = new_head;
      new_head = ptr;
  
      // Move on to the next node
      ptr = next_node;
  
      // Decrement the count of nodes to be reversed by 1
      k--;
    }
  
    // Return the head of the reversed list
    return new_head;
  }
  
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
  const input = createLinkedList([1, 2, 3, 4, 5]);
  const k = 2;
  
  // Reverse nodes in k-group chunks
  const result = reverseKGroup(input, k);
  
  // Print the reversed linked list
  printLinkedList(result);
  