class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const reverseKGroup = function(head, k) {
    let n = 0;
    for (let i = head; i != null; n++, i = i.next);
  
    let dmy = new ListNode(0);
    dmy.next = head;
  
    for (let prev = dmy, tail = head; n >= k; n -= k) {
      for (let i = 1; i < k; i++) {
        let next = tail.next.next;
        tail.next.next = prev.next;
        prev.next = tail.next;
        tail.next = next;
      }
  
      prev = tail;
      tail = tail.next;
    }
  
    return dmy.next;
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
  const input = createLinkedList([1, 2, 3, 4, 5]);
  const k = 2;
  
  // Reverse nodes in k-group chunks
  const result = reverseKGroup(input, k);
  
  // Print the reversed linked list
  printLinkedList(result);
  