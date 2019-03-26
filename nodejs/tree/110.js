/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return true
  }
  var res = orderTraverse(root, null, 0, 0)
  return res
};

function orderTraverse (p, q, pLevel, qLevel) {
  if (Math.abs(qLevel - pLevel) > 1) {
    return false
  }
  if (!p && !q) return true
  if (p) {
    pLevel++
    if (p.left && !p.right) {
      orderTraverse(p.left, null, pLevel, qLevel)
    }
    if (!p.left && p.right) {
      orderTraverse(null, p.right, pLevel, qLevel)
    }
    if (p.left && p.right) {
      orderTraverse(p.left, p.right, pLevel, qLevel)
    }
  }
  if (q) {
    qLevel++
    if (q.left && !q.right) {
      orderTraverse(q.left, null, pLevel, qLevel)
    }
    if (!q.left && q.right) {
      orderTraverse(null, q.right, pLevel, qLevel)
    }
    if (q.left && q.right) {
      orderTraverse(q.left, q.right, pLevel, qLevel)
    }
  }
  return Math.abs(qLevel - pLevel) > 1 ? false : true
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

// var arr = [1,2,2,3,3,null,null,4,4]
var arr = [1,2,2,3,null,null,3,4,null,null,4] // false
// var arr = [3,9,20,null,null,15,7]
// var arr = [1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]
// var arr = [3,9,20,null,null,15,7]
// var arr = [1,2,2,3,3,null,null,4,4]
// var arr = []
var a = createTree(arr)

var res = levelOrder(a)
console.log(res)
// console.log(a)
