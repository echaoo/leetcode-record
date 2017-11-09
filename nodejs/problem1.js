/**
 * Created by echaoo on 2017/10/31.
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
                break
            }
        }
    }
};

var num= [3,2,4];
var target = 6;

console.log(twoSum(num, target))