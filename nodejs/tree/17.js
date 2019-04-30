/**
 * @param {string} digits
 * @return {string[]}
 * solved with tree
 */
var letterCombinations = function(digits) {
  var dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  var arr = digits.split('')
  if (!arr.length) return []
  if (arr.length === 1) return dict[arr[0]]
  var root = createTree(arr, dict)
  return traverse(root, '', [], arr.length)
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = this.middle = this.addition = null;
}

function createTree (arr, dict) {
  var currentArr = dict[arr[0]]
  var currentLevel = [new TreeNode(currentArr[0]), new TreeNode(currentArr[1]), new TreeNode(currentArr[2])]
  if (currentArr.length === 4) {
    currentLevel.push(new TreeNode(currentArr[3]))
  }
  var root = new TreeNode('')
  for (var i = 0; i < arr.length - 1; i++) {
    var nextArr = dict[arr[i + 1]]
    nextLevelItem = [new TreeNode(nextArr[0]), new TreeNode(nextArr[1]), new TreeNode(nextArr[2])]
    if (nextArr.length === 4) {
      nextLevelItem.push(new TreeNode(nextArr[3]))
    }
    var nextLevel = []
    if (i === 0) {
      root.left = currentLevel[0]
      root.middle = currentLevel[1]
      root.right = currentLevel[2]
      if (currentArr.length === 4) {
        root.addition = currentLevel[3]
      }
    }
    for (var j = 0; j < currentArr.length; j++) {
      currentLevel[j].left = nextLevelItem[0]
      currentLevel[j].middle = nextLevelItem[1]
      currentLevel[j].right = nextLevelItem[2]
      if (nextArr.length === 4) {
        currentLevel[j].addition = nextLevelItem[3]
      }
    }
    nextLevel.push(nextLevelItem[0], nextLevelItem[1], nextLevelItem[2])
    if (nextArr.length === 4) {
      nextLevel.push(nextLevelItem[3])
    }
    currentLevel = nextLevel
    currentArr = nextArr
  }
  return root
}

function traverse (root, path, result, len) {
  path += root.val
  if (root.left !== null) {
    traverse(root.left, path, result, len)
  }
  if (root.middle) {
    traverse(root.middle, path, result, len)
  }
  if (root.right) {
    traverse(root.right, path, result, len)
  }
  if (root.addition) {
    traverse(root.addition, path, result, len)
  }
  if (path !== '' && path.length === len) {
    result.push(path)
  }
  return result
}

var str ='23'

var res = letterCombinations(str)

console.log(res)

// var arr = [2, 3]
// var dict = {
//   2: ['a', 'b', 'c'],
//   3: ['d', 'e', 'f']
// }
//
// var root = createTree(arr, dict)
//
// var res = traverse(root, '', [], 2)
// console.log(res)
