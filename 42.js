class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const mergeKLists = function(lists) {
    if (lists == null || lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    if (lists.length === 2) return mergeTwo(lists[0], lists[1]);
    const left = mergeKLists(lists.slice(0, Math.floor(lists.length / 2)));
    const right = mergeKLists(lists.slice(Math.floor(lists.length / 2)));
  
    return mergeTwo(left, right);
  };
  
  function mergeTwo(l1, l2) {
    const dummy = new ListNode();
    let cur = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
  
    return dummy.next;
  }
  
  // Example input
  const lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ];
  
  // Merge the k sorted lists
  const mergedList = mergeKLists(lists);
  
  // Print the merged list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  printLinkedList(mergedList);
  