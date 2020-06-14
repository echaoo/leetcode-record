/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(num) {
  let m = num
  let n = num
  let row = 0, col = 0, i = 0
  let count = 1
  const matrix = []
  for(let k = 0; k < n; k++) {
    matrix[k] = []
  }
  while(row < m && col < n ) {
    for (let i = col; i < n; i++) {
      matrix[row][i] = count++
    }
    row++
    for (i = row; i < m; i++) {
      matrix[i][n - 1] = count++
    }
    n--
    if (row < m) {
      for (i = n - 1; i >= col; i--) {
        matrix[m - 1][i] = count++
      }
      m--
    }
    if (col < n) {
      for (i = m - 1; i >= row; i--) {
        matrix[i][col] = count++
      }
      col++
    }
  }
  return matrix
};

const res = generateMatrix(3)
console.log(res)
