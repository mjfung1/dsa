class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

const node = new ListNode(3);
const head = new ListNode(0);
head.next = node;
head.next.next = new ListNode(3)
console.log(head);

let on = head; 
let length = 1;
while (on !== null) {
    console.log(on.value, 'value')
    length++;
    on = on.next;
    console.log(length, 'length')
    
    console.log(length, 'afterlength')

}
console.log(length)