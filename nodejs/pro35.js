/**
 * Created by echaoo on 2017/12/22.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        } else {
            let result = nums.concat(target).sort(function (a, b) {
                return a - b
            })
            return result.indexOf(target)
        }
    }
};

let arr = [1,3,5,6]
console.log(searchInsert(arr, 2))