class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
  };
  
  function merge(lists, l, r) {
    if (l > r) return null;
    if (l === r) return lists[l];
    let m = Math.floor((r + l) / 2);
    let left = merge(lists, l, m);
    let right = merge(lists, m + 1, r);
    let head = new ListNode(0);
    let dummy = head;
    while (left && right) {
      if (left.val <= right.val) {
        head.next = left;
        left = left.next;
      } else {
        head.next = right;
        right = right.next;
      }
      head = head.next;
    }
    head.next = left ? left : right;
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
  