// Given the head of a singly linked list, reverse the list, and return the reversed list.
const head = [1,2,3,4,5]




const reverseList = (head) => {
    let prev = null;
     
    while(head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

console.log(reverseList(head))