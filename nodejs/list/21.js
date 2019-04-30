/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var mergedHead = { val : -1, next : null },
    crt = mergedHead;
  while(l1 && l2) {
    if(l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList (arr) {
  if (!arr.length) return null
  var root = new ListNode(arr[0])
  var currenNode = root
  for (var i = 1; i < arr.length; i++) {
    var newNode = new ListNode(arr[i])
    currenNode.next = newNode
    currenNode = newNode
  }
  return root
}

var arr1 = []
var arr2 = [0]
var l1 = createList(arr1)
var l2 = createList(arr2)

var res = mergeTwoLists(l1, l2)
console.log(res)
