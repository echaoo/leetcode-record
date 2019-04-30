/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  var sortedNums = nums.sort(sortNum)
  var len = sortedNums.length
  var checkRepeat = {}
  var res = []
  for (var i = 0; i < len - 3; i++) {
    for (var j = i + 1; j < len - 2; j++) {
      var m = j + 1, n = len - 1
      while (m < n) {
        var temp = [sortedNums[i], sortedNums[j], sortedNums[m], sortedNums[n]]
        var sum = sortedNums[i] + sortedNums[j] + sortedNums[m] + sortedNums[n]
        if (sum === target) {
          if (!checkRepeat[temp.join('')]) {
            res.push(temp)
            checkRepeat[temp.join('')] = true
          }
          m++
          continue
        }
        if (sum > target) n--
        if (sum < target) m++
      }
    }
  }
  return res
};

function sortNum (a, b) {
  return a - b
}

var nums = [-3,-2,-1,0,0,1,2,3]

var res = fourSum(nums, 0)

console.log(res)
