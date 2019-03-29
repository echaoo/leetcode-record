/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  if (!root) return null
  var resArr = getResult(root,  [], [], [])
  var dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var res = ''
  var currentRes = ''
  var currentCount = resArr[0].split(',')
  if (resArr.length === 1) return mapPath(currentCount, dict)
  for (var i = 1; i < resArr.length; i++) {
    var tempArr = resArr[i].split(',')
    var orderLen = currentCount.length
    var tempLen = tempArr.length
    var maxLen = Math.max(orderLen, tempLen)
    for (var j = 0; j < maxLen; j++) {
      if (!tempArr[j]) {
        res = currentRes
        currentRes = ''
        currentCount = tempArr
        break
      }
      if (!currentCount[j]) {
        res = currentRes
        currentRes = ''
        break
      }
      if (parseInt(currentCount[j]) > parseInt(tempArr[j])) {
        currentCount = tempArr
        res = mapPath(tempArr, dict)
        currentRes = ''
        break
      } else if (parseInt(currentCount[j]) < parseInt(tempArr[j])) {
        res = mapPath(currentCount, dict)
        currentRes = ''
        break
      } else {
        currentRes += dict[currentCount[j]]
      }
      if (j === maxLen - 1) {
        res = currentRes
        currentRes = ''
        break
      }
    }
  }
  return res
};

function mapPath (path, dict) {
  var res = ''
  for (var i = 0; i < path.length; i++) {
    res += dict[path[i]]
  }
  return res
}

function getResult (node, currentPath, currentPathValue, result) {
  if (!node) return result
  if (node.count) {
    node.count++
  } else {
    node.count = 1
    currentPath.push(node)
    currentPathValue.unshift(node.val)
  }
  if (node.count > 2) {
    if (currentPath.length > 0) {
      currentPath.pop()
      currentPathValue.shift()
      getResult(currentPath[currentPath.length - 1], currentPath, currentPathValue, result)
    } else {
      return result
    }
  }
  if (!node.left && !node.right) {
    result.push(currentPathValue.join(','))
    if (currentPath.length > 0) {
      currentPath.pop()
      currentPathValue.shift() // 返回上一节点
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
      currentPathValue.shift()
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
// var arr = [0,1,2,3,4,3,4]
// var arr = [25,1,3,1,3,0,2]
// var arr = [2,2,1,null,1,0,null,0]
// var arr = [3,9,20,null,null,15,7]
// var arr = [21]
var arr = [4,0,1,1]
// var arr = [19,10]
var a = createTree(arr)

var res = smallestFromLeaf(a)
console.log(res)
// console.log(a)
