// Define the ListNode class
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Define the addTwoNumbers function
  const addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null)
    let inc = false
    let cur = res
    while(l1 || l2 || inc) {
      const tmp = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (inc ? 1 : 0)
      if(tmp >= 10) inc = true
      else inc = false
      cur.next = new ListNode(tmp % 10)
      cur = cur.next
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
    }
  
    return res.next
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
  