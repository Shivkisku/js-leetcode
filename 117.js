// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const reverseBetween = function(head, left, right) {
    if (head == null) return head;

    const dummy = new ListNode(null);
    dummy.next = head;
    let num = 0,
        cur = head;

    // Count the number of nodes in the linked list
    while (cur) {
        num++;
        cur = cur.next;
    }

    let idx = 0,
        pre = null;
    cur = dummy;

    while (idx < right && idx <= num) {
        if (idx === left - 1) pre = cur;

        if (idx >= left) {
            const tmp = pre.next;
            pre.next = cur.next;
            cur.next = cur.next.next;
            pre.next.next = tmp;
        }

        if (idx < left) cur = cur.next;
        idx++;
    }

    return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
    let dummy = new ListNode(undefined);
    let current = dummy;

    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const left = 2;
const right = 4;
const head = createLinkedListFromArray(inputArray);
const result = reverseBetween(head, left, right);
printLinkedList(result);
