class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };
  
  // Helper function to create linked lists for testing
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
  
  // Helper function to print linked list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  // Example input
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([1, 3, 4]);
  
  // Merge the two lists
  const mergedList = mergeTwoLists(l1, l2);
  
  // Print the merged list
  printLinkedList(mergedList);
  