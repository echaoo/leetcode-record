/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var sortedNums = nums.sort(sortNum)
  var len = nums.length - 2
  var similerNum = target
  var differ
  for (var i = 0; i < len; i++) {
    var front = i + 1, back = len + 1
    var currentDiffer = undefined
    while (front < back) {
      var sum = sortedNums[i] + sortedNums[front] + sortedNums[back]
      var tempDiffer = sum - target
      if (differ === undefined) {
        similerNum = sum
        differ = tempDiffer
      }
      if (currentDiffer === undefined) {
        currentDiffer = tempDiffer
      }
      if (Math.abs(currentDiffer) < Math.abs(tempDiffer)) {
        if (tempDiffer > 0) {
          back--
        } else {
          front++
        }
      }
      if (Math.abs(currentDiffer) > Math.abs(tempDiffer)) {
        currentDiffer = tempDiffer
      }
      if (Math.abs(differ) > Math.abs(currentDiffer)) {
        similerNum = sum
        differ = tempDiffer
      }
      if (differ === 0) {
        console.log(similerNum)
        return similerNum
      }
      if (tempDiffer > 0) {
        back--
      } else {
        front++
      }
    }
  }
  console.log(similerNum)
  return similerNum
};

function sortNum (a, b) {
  return a - b
}

// nums = [-1, 2, 1, -4]
nums = [1,2,5,10,11]
// nums = [1,1,-1,-1,3]
// nums = [0,2,1,-3]
// nums = [1,2,4,8,16,32,64,128]


threeSumClosest(nums, 12)
