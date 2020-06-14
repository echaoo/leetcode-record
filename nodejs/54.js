/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return []
  let m = matrix.length
  let n = matrix[0].length
  let row = 0, col = 0, i = 0
  while(row < m && col < n ) {
    for (let i = col; i < n; i++) {
      result.push(matrix[row][i])
    }
    row++
    for (i = row; i < m; i++) {
      result.push(matrix[i][n - 1])
    }
    n--
    if (row < m) {
      for (i = n - 1; i >= col; i--) {
        result.push(matrix[m - 1][i])
      }
      m--
    }
   if (col < n) {
     for (i = m - 1; i >= row; i--) {
       result.push(matrix[i][col])
     }
     col++
   }
  }
  return result
};

// const matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ]
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [4, 6, 7, 9],
  [5, 6, 7, 8]
]
const res = spiralOrder(matrix)
console.log(res)
