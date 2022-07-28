// You are given the heads of two sorted linked lists list1 and list2.

const { ListRounded } = require("@material-ui/icons")

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

let l1 = [1, 2, 4]
let l2 = [1, 3, 4]

var mergeTwoLists = function (l1, l2) {
    let nullNode = { val: 0, next: null };
    let prev = nullNode;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    }
    prev.next = l1 || l2;
    return nullNode.next;
};

console.log(mergeTwoLists(l1, l2))