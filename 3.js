// Define the ListNode class
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Define the addTwoNumbers function
  const addTwoNumbers = function(l1, l2) {
    const res = new ListNode(null);
    single(l1, l2, res);
    return res.next;
  };
  
  function single(l1, l2, res) {
    let cur;
    let addOne = 0;
    let sum = 0;
    let curVal = 0;
    while (l1 || l2 || addOne) {
      sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + addOne;
      if (sum / 10 >= 1) {
        curVal = sum % 10;
        addOne = 1;
      } else {
        curVal = sum;
        addOne = 0;
      }
  
      if (cur) {
        cur = cur.next = new ListNode(curVal);
      } else {
        cur = res.next = new ListNode(curVal);
      }
  
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
  }
  
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
  