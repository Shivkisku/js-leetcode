class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next ? next : null;
    }
  }
  
  const mergeKLists = function(lists) {
    if (lists == null || lists.length === 0) return null;
    const dummy = new ListNode();
    let head = dummy;
    const pq = new PriorityQueue((a, b) => a.val < b.val);
    for (let list of lists) {
      while (list) {
        pq.push(list);
        list = list.next;
      }
    }
    while (!pq.isEmpty()) {
      const pop = pq.pop();
      head.next = new ListNode(pop.val);
      head = head.next;
    }
    return dummy.next;
  };
  
  class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this.heap = [];
      this.top = 0;
      this.comparator = comparator;
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    peek() {
      return this.heap[this.top];
    }
    push(...values) {
      values.forEach((value) => {
        this.heap.push(value);
        this.siftUp();
      });
      return this.size();
    }
    pop() {
      const poppedValue = this.peek();
      const bottom = this.size() - 1;
      if (bottom > this.top) {
        this.swap(this.top, bottom);
      }
      this.heap.pop();
      this.siftDown();
      return poppedValue;
    }
    replace(value) {
      const replacedValue = this.peek();
      this.heap[this.top] = value;
      this.siftDown();
      return replacedValue;
    }
  
    parent = (i) => ((i + 1) >>> 1) - 1;
    left = (i) => (i << 1) + 1;
    right = (i) => (i + 1) << 1;
    greater = (i, j) => this.comparator(this.heap[i], this.heap[j]);
    swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
    siftUp = () => {
      let node = this.size() - 1;
      while (node > this.top && this.greater(node, this.parent(node))) {
        this.swap(node, this.parent(node));
        node = this.parent(node);
      }
    }
    siftDown = () => {
      let node = this.top;
      while (
        (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
        (this.right(node) < this.size() && this.greater(this.right(node), node))
      ) {
        let maxChild =
          this.right(node) < this.size() &&
          this.greater(this.right(node), this.left(node))
            ? this.right(node)
            : this.left(node);
        this.swap(node, maxChild);
        node = maxChild;
      }
    }
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
  