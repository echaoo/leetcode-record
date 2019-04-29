/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sortedNums = nums.sort(sortNum)
    var len = nums.length - 2
    var checkStr = {}
    var res = []
    for (var i = 0; i < len; i++) {
        var front = i + 1, back = len + 1
        while (front < back) {
            var target = -(sortedNums[front] + sortedNums[back])
            if (sortedNums[i] < target) {
                front++
                continue
            }
            if (sortedNums[i] > target) {
                back--
                continue
            }
            var resItem = [sortedNums[i], sortedNums[front], sortedNums[back]]
            if (!checkStr[resItem.join('')]) {
                res.push(resItem)
                checkStr[resItem.join('')] = true
            }
            if (front < len - 1) {
                front++
            }
            if (back > 0) {
                back--
            }
        }
    }
    return res
};

function sortNum (a, b) {
    return a - b
}

nums = [-1, 0, 1, 2, -1, -4]

threeSum(nums)
