/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return []
  return getResult(root,  [], [], [])
};

function getResult (node, currentPath, currentPathValue, result) {
  if (!node) return result
  if (node.count) {
    node.count++
  } else {
    node.count = 1
    currentPath.push(node)
    currentPathValue.push(node.val)
  }
  if (node.count > 2) {
    if (currentPath.length > 0) {
      currentPath.pop()
      currentPathValue.pop()
      getResult(currentPath[currentPath.length - 1], currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  if (!node.left && !node.right) {
    result.push(currentPathValue.join('->'))
    if (currentPath.length > 0) {
      currentPath.pop()
      currentPathValue.pop() // 返回上一节点
      getResult(currentPath[currentPath.length - 1], currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  if (node.left && !node.left.count) {
     getResult(node.left, currentPath, currentPathValue, result)
  } else if (node.right && !node.right.count) {
    getResult(node.right, currentPath, currentPathValue, result)
  } else {
    if (currentPath.length > 0) {
      currentPath.pop()
      currentPathValue.pop()
      getResult(currentPath[currentPath.length - 1], currentPath, currentPathValue, result)
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

var res = binaryTreePaths(a)
console.log(res)
// console.log(a)
