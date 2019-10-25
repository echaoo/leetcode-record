/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯法
 */
var combine = function(n, k) {
  const result = []
  for (let i = 1; i < n + 1; i++) {
    if (k === 1) {
      result.push([i])
    } else {
      backTrack(n, k, i,[i], result)
    }
  }
  return result
};

function backTrack (n, k, index, tempPath, result) {
  if (index > n) {
    return
  }
  if (tempPath.length > k) {
    return
  } else if (tempPath.length === k) {
    result.push(tempPath)
  }
  for (let i = index + 1; i < n + 1; i++) {
    const newPath = [...tempPath, i]
    backTrack(n, k, i, newPath, result)
  }
}

const a = combine(4, 2)
console.log(a)
