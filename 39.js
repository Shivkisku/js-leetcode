class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
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
  
  // Function to merge two sorted linked lists
  const mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode();
    let cur = dummy;
  
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        cur.next = new ListNode(l2.val);
        l2 = l2.next;
      }
  
      cur = cur.next;
    }
  
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
  
    return dummy.next;
  };
  
  // Example input
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([1, 3, 4]);
  
  // Merge the two lists
  const mergedList = mergeTwoLists(l1, l2);
  
  // Print the merged list
  printLinkedList(mergedList);
  