/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false
  return judge(root, 0, sum)
};

function judge (node, val, sum) {
  var rs = val + node.val
  if (node.left === null && node.right === null) {
    return rs === sum
  }
  var leftrs = false
  var rightrs = false
  if (node.left) {
    leftrs = judge(node.left, rs, sum)
  }
  if (node.right) {
    rightrs = judge(node.right, rs, sum)
  }
  return leftrs || rightrs
}
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree (arr) {
  var count = 1
  var total = 1
  var arrNode = arr.map(i => {
    if (i === null) {
      return null
    } else {
      return new TreeNode(i)
    }
  })
  var len = arrNode.length
  var root = arrNode[0]
  while (total < (len + count)) {
    var nullCount = 0
    for (var i = 0; i < count; i++) {
      var currentNode = arrNode.shift()
      if (currentNode) {
        if (count === 1 && i === 0) {
          root = currentNode
        }
        if (arrNode[count + i - 1 - (nullCount * 2)] !== undefined) {
          currentNode.left = arrNode[count + i - 1 - (nullCount * 2)]
        }
        if (arrNode[count + i - (nullCount * 2)] !== undefined) {
          currentNode.right = arrNode[count + i - (nullCount * 2)]
        }
      } else {
        nullCount++
      }
    }
    count = count * 2
    total += count
  }
  return root
}

var arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
var a = createTree(arr)

var res = hasPathSum(a, 22)
console.log(res)
// console.log(a)
