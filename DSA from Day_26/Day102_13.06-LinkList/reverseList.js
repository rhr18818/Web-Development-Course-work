/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // let curr = head;
    // let prev = null
    // let temp 
    // while(curr!=null){
    //     temp = curr.next
    //     curr.next = prev
    //     prev = curr
    //     curr = temp
    // }
    // return prev

    if(!head || !head.next) return head
    let newNode = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newNode /////----> runtime slower then iterative one
};