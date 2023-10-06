// Define the ListNode class
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Define the addTwoNumbers function
  const addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(null)
    let cur = dummy, carry = 0
  
    while(l1 || l2) {
      let v = 0
      if(l1 && l2) {
        v = l1.val + l2.val + carry
        l1 = l1.next
        l2 = l2.next
      } else {
        const node = l1 || l2
        v = node.val + carry
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
      }
  
      cur.next = new ListNode(v % 10)
      cur = cur.next
      if(v >= 10) carry = 1
      else carry = 0
    }
  
    if(carry) cur.next = new ListNode(1)
  
    return dummy.next
  };
  
  // Create two linked lists representing numbers
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(7);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(9);
  
  // Call the addTwoNumbers function
  const result = addTwoNumbers(l1, l2);
  
  // Print the output (the result linked list)
  let currentNode = result;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
  