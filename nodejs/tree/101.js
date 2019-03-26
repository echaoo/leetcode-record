
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var a11 = traverse(root.left, [])
  console.log(a11)
};

function traverse (root, arr) {
  arr.push(root.val)
  if (root.left) {
    traverse(root.left, arr)
  }
  if (root.right) {
    traverse(root.right, arr)
  }
  if (root === null || root === undefined) return arr
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree (arr) {
  var count = 1
  var total = 1
  var arrNode = arr.map(i => new TreeNode(i))
  var len = arrNode.length
  var root = arrNode[0]
  while (total < (len + count)) {
    for (var i = 0; i < count; i++) {
      var currentNode = arrNode.shift()
      if (count === 1 && i === 0) {
        root = currentNode
      }
      if (arrNode[count + i - 1] !== undefined) {
        currentNode.left = arrNode[count + i - 1]
      }
      if (arrNode[count + i] !== undefined) {
        currentNode.right = arrNode[count + i]
      }
    }
    count = count * 2
    total += count
  }
  return root
}

var arr = [1,2,2,3,4,4,3]
var a = createTree(arr)

isSymmetric(a)
// console.log(a)
