// Define the ListNode class
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Define a function to create a linked list from an array
  function createLinkedList(arr) {
    let head = null;
    let current = null;
  
    for (const val of arr) {
      if (head === null) {
        head = new ListNode(val);
        current = head;
      } else {
        current.next = new ListNode(val);
        current = current.next;
      }
    }
  
    return head;
  }
  
  // Define a function to print a linked list
  function printLinkedList(head) {
    let current = head;
    const result = [];
  
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
  
    console.log(result.join(' -> '));
  }
  
  // Define the removeNthFromEnd function
  const removeNthFromEnd = (head, n) => {
    if (head.next === null) return null;
  
    let ptrBeforeN = head;
    let count = 1;
  
    // While there are more elements
    let el = head.next;
    while (el !== null) {
      if (count > n) ptrBeforeN = ptrBeforeN.next;
      el = el.next;
      count++;
    }
  
    if (count === n) return head.next;
  
    ptrBeforeN.next = ptrBeforeN.next.next;
    return head;
  };
  
  // Test the function with a sample input
  const inputArray = [1, 2, 3, 4, 5];
  const n = 2;
  
  const linkedList = createLinkedList(inputArray);
  const modifiedList = removeNthFromEnd(linkedList, n);
  
  console.log("Original Linked List:");
  printLinkedList(linkedList);
  
  console.log("Modified Linked List:");
  printLinkedList(modifiedList);
  