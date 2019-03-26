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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []
  return getResult(root, 0, sum, [], [], [])
};

function getResult (node, val, sum, currentPath, currentPathValue, result) {
  var res = val
  if (!node) return result
  if (node.count) {
    node.count++
  } else {
    node.count = 1
    currentPath.push(node)
    currentPathValue.push(node.val)
    res = res + node.val
  }
  if (node.count > 2) {
    if (currentPath.length > 0) {
      res = res - currentPathValue[currentPathValue.length - 1]
      currentPath.pop()
      currentPathValue.pop()
      getResult(currentPath[currentPath.length - 1], res, sum, currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  if (!node.left && !node.right) {
    if (res === sum) {
      result.push(Object.assign([], currentPathValue))
    }
    if (currentPath.length > 0) {
      res = res - currentPathValue[currentPathValue.length - 1]
      currentPath.pop()
      currentPathValue.pop() // 返回上一节点
      getResult(currentPath[currentPath.length - 1], res, sum, currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  if (node.left && !node.left.count) {
     getResult(node.left, res, sum, currentPath, currentPathValue, result)
  } else if (node.right && !node.right.count) {
    getResult(node.right, res, sum, currentPath, currentPathValue, result)
  } else {
    if (currentPath.length > 0) {
      res = res - currentPathValue[currentPathValue.length - 1]
      currentPath.pop()
      currentPathValue.pop()
      getResult(currentPath[currentPath.length - 1], res, sum, currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  return result
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

// var arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
var arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
var a = createTree(arr)

var res = pathSum(a, 22)
console.log(res)
// console.log(a)
