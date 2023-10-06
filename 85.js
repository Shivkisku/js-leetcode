class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy,
      slow = dummy;
  
    let i;
    for (i = 0; fast.next != null; i++) fast = fast.next;
  
    for (let j = i - k % i; j > 0; j--) slow = slow.next;
  
    fast.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
  
    return dummy.next;
  };
  
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }
  
  const inputArray = [1, 2, 3, 4, 5]; // Replace with your desired input
  const k = 2; // Replace with your desired value of k
  
  const head = createLinkedList(inputArray);
  const rotatedHead = rotateRight(head, k);
  
  // Print the linked list after rotation
  let current = rotatedHead;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  