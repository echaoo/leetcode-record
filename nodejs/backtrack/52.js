/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  let result = {
    result: 0
  }
  backtrack(0, n, initTrack(n), result)
  return result.result
};

function initTrack (n) {
  let initArr = []
  for(let i = 0; i < n; i++) {
    initArr.push(new Array(n).fill('.'))
  }
  return initArr
}

function backtrack (currentRow, n, track, result) {
  if (currentRow === n) {
    result.result++
    return
  }
  for (let i = 0; i < n; i++) {
    if (!valid(currentRow, i, n, track)) continue
    track[currentRow][i] = 'Q'
    backtrack(currentRow + 1, n, track, result)
    track[currentRow][i] = '.'
  }
}

function valid (row, col, n, track) {
  for (let i = 0; i < n; i++) {
    if (track[row][i] === 'Q') return false
  }

  for (let i = 0; i < n; i++) {
    if (track[i][col] === 'Q') return false
  }
  // 检查右上方是否有皇后互相冲突
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (track[i][j] === 'Q') return false;
  }
  // 检查右下方是否有皇后互相冲突
  for (let i = row, j = col; i < n && j < n; i++, j++) {
    if (track[i][j] === 'Q') return false;
  }
  // 检查左上方是否有皇后互相冲突
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (track[i][j] === 'Q') return false;
  }

  // 检查左下方是否有皇后互相冲突
  for (let i = row, j = col; i >= 0 && j < 0; i--, j++) {
    if (track[i][j] === 'Q') return false;
  }
  return true
}

const res = totalNQueens(1)
console.log(res)
