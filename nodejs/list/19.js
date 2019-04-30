/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) return null
  var start = head
  var end = head
  var count = 0
  while(end.next) {
    if (count < n) {
      end = end.next
      count++
    } else {
      start = start.next
      end = end.next
    }
  }
 if (count < n) {
   head = start.next
 } else {
   start.next = start.next.next
 }
  return head
};

function ListNode(val) {
   this.val = val;
   this.next = null;
}

function createList (arr) {
  var root = new ListNode(arr[0])
  var currenNode = root
  for (var i = 1; i < arr.length; i++) {
    var newNode = new ListNode(arr[i])
    currenNode.next = newNode
    currenNode = newNode
  }
  return root
}

var arr = [1, 2, 3]
var list = createList(arr)

var res = removeNthFromEnd(list, 3)
console.log(res)
