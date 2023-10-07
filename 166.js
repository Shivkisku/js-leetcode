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
  
  // Function to detect the cycle and return the starting node
  const detectCycle = function(head) {
    if (head === null || head.next === null) return null;
    let fast = head;
    let slow = head;
    let start = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        while (slow !== start) {
          slow = slow.next;
          start = start.next;
        }
        return start;
      }
    }
    return null;
  };
  
  // Test the code
  const cycleStartNode = detectCycle(head);
  console.log(cycleStartNode); // Print the result
  