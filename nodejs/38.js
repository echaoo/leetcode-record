/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'
  let j = 1
  let res = '1'
  while (j < n) {
    res = count(res)
    j++
  }
  return res
};

function count (str) {
  if (str.length === 1) return '11'
  let tempRes = ''
  let tempCount = 1
  const len = str.length
  for (let i = 0; i < len; i++) {
    if (i !== len - 1) {
      if (str[i] !== str[i + 1]) {
        tempRes += (tempCount + str[i])
        tempCount = 1
      } else {
        tempCount++
      }
    } else {
      tempRes += (tempCount + str[i])
    }
  }
  return tempRes
}

const a = countAndSay(6)
console.log(a)
