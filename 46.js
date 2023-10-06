class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const reverseKGroup = function (head, k) {
    if (head == null) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let n = 0,
      cur = head;
    while (cur) {
      n++;
      cur = cur.next;
    }
    if (n < k) return head;
    let pre = dummy,
      tail = head;
  
    for (let i = 0; i + k <= n; i += k) {
      for (let j = 1; j < k; j++) {
        const tmp = pre.next;
        pre.next = tail.next;
        tail.next = tail.next.next;
        pre.next.next = tmp;
      }
      pre = tail;
      tail = tail.next;
    }
  
    return dummy.next;
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
  