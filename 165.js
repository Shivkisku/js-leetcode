function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  // Create a sample linked list with a cycle
  const head = new ListNode(1);
  const second = new ListNode(2);
  const third = new ListNode(3);
  const fourth = new ListNode(4);
  const fifth = new ListNode(5);
  
  head.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;
  fifth.next = second; // Creating a cycle
  
  // Function to check for a cycle
  const hasCycle = function(head) {
    const seen = [];
    while (head != null) {
      if (seen.indexOf(head) !== -1) {
        return true;
      } else {
        seen.push(head);
      }
      head = head.next;
    }
    return false;
  };
  
  // Test the code
  const hasCycleResult = hasCycle(head);
  console.log(hasCycleResult); // Print the result
  