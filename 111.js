// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const partition = function(head, x) {
    const leftHead = new ListNode();
    const rightHead = new ListNode();
    let left = leftHead;
    let right = rightHead;

    // Split the list into two sides: left if val < x, else right
    for (let node = head; node !== null; node = node.next) {
        if (node.val < x) {
            left.next = node;
            left = node;
        } else {
            right.next = node;
            right = node;
        }
    }

    // Combine the two sides
    left.next = rightHead.next;
    right.next = null;

    return leftHead.next;
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
const inputArray = [1, 4, 3, 2, 5, 2];
const x = 3;
const head = createLinkedListFromArray(inputArray);
const result = partition(head, x);
printLinkedList(result);
