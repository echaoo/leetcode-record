/**
 * Created by echaoo on 2017/11/16.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var resultArr = []
    var arr = new Set()
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var result = 0 - (nums[i] + nums[j])
            var tempnum = nums.slice(j)
            if (tempnum.indexOf(result) >= 0) {
                arr.add([nums[i], nums[j], result].sort(function (a, b) {
                    return a - b
                }).join())
            }
        }
    }
    arr.forEach(function (i) {
        resultArr.push(i.split(',').map(x => +x))
    })
    return resultArr
};
 
var S = [-1,0,1,2,-1,-4]
console.log(threeSum(S))