const getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB;
    while(a !== b) {
      a = a == null ? headB : a.next;
      b = b == null ? headA : b.next;
    }
    return a;
  };
  
  // Definition for singly-linked list.
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Helper function to create linked lists for testing
  function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // Helper function to print the linked list (for testing)
  function printLinkedList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
  
  // Create two linked lists with an intersection
  const commonNode = new ListNode(8);
  const listA = createLinkedList([4, 1]);
  const listB = createLinkedList([5, 6]);
  listA.next.next = commonNode;
  listB.next.next = commonNode;
  
  // Find the intersection node
  const intersectionNode = getIntersectionNode(listA, listB);
  console.log(intersectionNode.val); // Output should be 8
  