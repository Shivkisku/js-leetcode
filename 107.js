// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const deleteDuplicates = function(head) {
    let dummy = new ListNode(undefined);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr) {
        while (curr.next && curr.next.val === curr.val) {
            curr = curr.next;
        }
        if (prev.next === curr) { // detect if it has deleted some elements
            prev = prev.next;
            curr = curr.next;
        } else {
            prev.next = curr.next;
            curr = curr.next;
        }
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
const inputArray = [1, 2, 3, 3, 4, 4, 5];
const head = createLinkedListFromArray(inputArray);
const result = deleteDuplicates(head);
printLinkedList(result);
