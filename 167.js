function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  // Create a sample linked list
  const head = new ListNode(1);
  const second = new ListNode(2);
  const third = new ListNode(3);
  const fourth = new ListNode(4);
  
  head.next = second;
  second.next = third;
  third.next = fourth;
  
  // Function to reorder the linked list
  const reorderList = function(head) {
    if (head == null) return head;
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let head2 = reverse(slow.next);
    slow.next = null;
  
    while (head && head2) {
      const next = head.next,
        next2 = head2.next;
      head2.next = head.next;
      head.next = head2;
      head = next;
      head2 = next2;
    }
  
    function reverse(node) {
      let pre = null,
        cur = node;
      while (cur) {
        const tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
      }
      return pre;
    }
  };
  
  // Function to print the linked list
  function printLinkedList(head) {
    const result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    console.log(result.join(" -> "));
  }
  
  // Test the code
  console.log("Original Linked List:");
  printLinkedList(head);
  reorderList(head);
  console.log("Reordered Linked List:");
  printLinkedList(head);
  