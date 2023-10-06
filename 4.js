// Define the ListNode class
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Define the addTwoNumbers function
  const addTwoNumbers = function(l1, l2) {
    let extra = false
    const dummy = new ListNode()
    let cur = dummy
    while(l1 || l2) {
      let val = 0
      if(l1) val += l1.val
      if(l2) val += l2.val
      if(extra) val += 1
        
      if(val > 9) {
        extra = true
        val = val % 10
      } else {
        extra = false
      }
      cur.next = new ListNode(val)
      cur = cur.next
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
    }
  
    if(extra) cur.next = new ListNode(1)
    return dummy.next
  };
  
  // Create two linked lists representing numbers
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  // Call the addTwoNumbers function
  const result = addTwoNumbers(l1, l2);
  
  // Print the output (the result linked list)
  let currentNode = result;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
  