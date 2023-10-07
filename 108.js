// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const deleteDuplicates = function(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
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
